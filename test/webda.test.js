var assert = require("assert");
var Webda = require("../core.js");
var Executor = require("../services/executor.js");
var config = require("./config.json");
var webda;
var ctx;
var executor;

describe('Webda', function() {
  beforeEach(function() {
    webda = new Webda(config);
    ctx = webda.newContext();
  });
  describe('getLocales()', function() {
    var headers = {};
    it('Get default locale', function() {
      headers['Accept-Language'] = 'zh-CN';
      ctx.setRoute({
        _http: {
          headers: headers
        }
      });
      assert.equal(ctx.getLocale(), 'es-ES');
    });
    it('Get approx locale', function() {
      headers['Accept-Language'] = 'en-US;q=0.6,en;q=0.4,es;q=0.2';
      ctx.setRoute({
        _http: {
          headers: headers
        }
      });
      assert.equal(ctx.getLocale(), 'en-GB');
    });
    it('Get exact locale', function() {
      headers['Accept-Language'] = 'fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4,es;q=0.2';
      ctx.setRoute({
        _http: {
          headers: headers
        }
      });
      assert.equal(ctx.getLocale(), 'fr-FR');
    });
    it('Get fallback locale', function() {
      headers['Accept-Language'] = 'zn-CH,zn;q=0.8,en-US;q=0.6,en;q=0.4,es;q=0.2';
      ctx.setRoute({
        _http: {
          headers: headers
        }
      });
      assert.equal(ctx.getLocale(), 'en-GB');
    });
  });
  describe('getVersion()', function() {
    it('current', function() {
      assert.equal(webda.getVersion(), '0.5.3');
    });
  });
  describe('getService()', function() {
    it('normal', function() {
      assert.notEqual(null, webda.getService("Authentication"));
    });
  })
  describe('getExecutor()', function() {
    it('Known page', function() {
      executor = webda.getExecutor(ctx, "test.webda.io", "GET", "/");
      assert.notEqual(executor, undefined);
      assert.equal(ctx['_route']['_http']["method"], "GET");
      assert.equal(ctx['_route']['_http']["url"], "/");
      assert.equal(ctx['_route']['_http']["host"], "test.webda.io");
      assert.equal(ctx["_params"]["TEST_ADD"], undefined);
      assert.equal(ctx["_params"]["accessKeyId"], "LOCAL_ACCESS_KEY");
      assert.equal(ctx["_params"]["secretAccessKey"], "LOCAL_SECRET_KEY");
      // Debug is Executor
      assert(executor instanceof Executor);
    });
    it('Known page - multiple method', function() {
      executor = webda.getExecutor(ctx, "test.webda.io", "POST", "/");
      assert.notEqual(executor, undefined);
      assert.equal(ctx['_route']['_http']["method"], "POST");
      assert.equal(ctx['_route']['_http']["url"], "/");
      assert.equal(ctx['_route']['_http']["host"], "test.webda.io");
      assert.equal(ctx["_params"]["TEST_ADD"], undefined);
      assert.equal(ctx["_params"]["accessKeyId"], "LOCAL_ACCESS_KEY");
      assert.equal(ctx["_params"]["secretAccessKey"], "LOCAL_SECRET_KEY");
    });
    it('Known page - unknown method', function() {
      assert.equal(webda.getExecutor(ctx, "test.webda.io", "PUT", "/"), undefined);
    });
    it('Unknown page', function() {
      assert.equal(webda.getExecutor(ctx, "test.webda.io", "GET", "/test"), undefined);
    });
    it('Known template page', function() {
      executor = webda.getExecutor(ctx, "test.webda.io", "GET", "/urltemplate/666");
      assert.notEqual(executor, undefined);
      assert.equal(ctx['_route']['_http']["method"], "GET");
      assert.equal(ctx['_route']['_http']["url"], "/urltemplate/666");
      assert.equal(ctx['_route']['_http']["host"], "test.webda.io");
      assert.equal(ctx['_params']['id'], 666);
      assert.equal(ctx["_params"]["TEST_ADD"], "Users");
      assert.equal(ctx["_params"]["TEST"], "Global");
      // Default is Executor
      assert(executor instanceof Executor);
    });
    it('Passport executor', function() {
      executor = webda.getExecutor(ctx, "test.webda.io", "GET", "/auth/facebook");
      assert.notEqual(executor, undefined);
      assert.notEqual(executor._extended, true);
      executor = webda.getExecutor(ctx, "test.webda.io", "GET", "/auth/facebook/callback?code=xxx&plop=test");
      assert.notEqual(executor, undefined);
      assert.equal(ctx._params.code, "xxx");
      assert.equal(ctx._params.provider, "facebook");
    });
    it('/ inside querystring', function() {
      executor = webda.getExecutor(ctx, "test.webda.io", "GET", "/auth/google/callback?code=4/5FGBh9iF5CxUkekcWQ8ZykvQnjRskeLZ9gFN3uTjLy8");
      assert.notEqual(executor, undefined);
      assert.equal(ctx._params.code, "4/5FGBh9iF5CxUkekcWQ8ZykvQnjRskeLZ9gFN3uTjLy8");
      assert.equal(ctx._params.provider, "google");
      executor = webda.getExecutor(ctx, "test.webda.io", "GET", "/auth/google/callback?code=4/kS_0n1xLdgh47kNTNY064vUMNR0ZJtHUzy9jFxHRY_k#");
      assert.equal(ctx._params.code, "4/kS_0n1xLdgh47kNTNY064vUMNR0ZJtHUzy9jFxHRY_k#");
      assert.equal(ctx._params.provider, "google");

    });
    it('/ inside path', function() {
      executor = webda.getExecutor(ctx, "test.webda.io", "GET", "/urltemplate/666/test");
      assert.notEqual(executor, undefined);
      assert.notEqual(ctx._params.id, "666/test");
      assert.equal(ctx._params.other, "test");
    });
    it('/me', function() {
      executor = webda.getExecutor(ctx, "test.webda.io", "GET", "/auth/me");
      assert.notEqual(executor, undefined);
      assert.equal(ctx._params.provider, undefined);

    });
  });
});