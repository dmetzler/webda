var pageComponent=webpackJsonppageComponent([18],{143:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=o(l),p=n(1),s=o(p);n(3),n(4),n(5),n(6),n(7),n(8),n(9);var c=n(144),f=o(c),d=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(u.default);s.default.register(d,f.default),t.default=d},144:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.IbWVy=void 0;var l,u=n(0),p=o(u),s=n(1),c=o(s);goog.loadModule(function(e){function t(e,t,o){var l=function(){r("article",null,null,"id","1"),r("h2"),i("Overview"),a("h2"),r("p"),r("img",null,null,"src","http://webda.io/images/schemas/aws_deploy.png","alt","image"),a("img"),a("p"),a("article"),r("article",null,null,"id","2"),r("h2"),i("Deployment Policy"),a("h2"),r("p"),i("To be able to deploy the deployment user must have at least :"),a("p"),u({code:'{\n    "Sid": "Stmt1438583420001",\n    "Effect": "Allow",\n    "Action": [\n        "lambda:*",\n        "iam:PassRole",\n        "apigateway:*"\n    ],\n    "Resource": [\n        "*"\n    ]\n}',mode:"javascript"},null,o),r("p"),i("This can be restrict more and should, need to update the documentation"),a("p"),a("article"),r("article",null,null,"id","3"),r("h2"),i("Package"),a("h2"),r("p"),i("The package is a zip of your folder, we dont have advanced cleaning feature nor ignore files, so the package can be big if you forget to clean your folder before."),a("p"),a("article"),r("article",null,null,"id","4"),r("h2"),i("Lambda"),a("h2"),r("p"),i("Once the package done, it will be upload as a Lambda function with the name specified, updating if it already exists."),a("p"),a("article"),r("article",null,null,"id","5"),r("h2"),i("API Gateway"),a("h2"),r("p"),i("It map all the routes from your application, if a "),r("strong"),i("website"),a("strong"),i(" parameter is found on the parameters of deployment then it will enable CORS for you for this URL"),a("p"),r("p"),i("It also deploy the API as Stage named with the name of the deployment."),a("p"),a("article"),r("input",null,null,"type","hidden","value",e.page.title),a("input"),r("input",null,null,"type","hidden","value",e.site.title),a("input")};p(n.$$assignDefaults({content:l},e),null,o)}goog.module("IbWVy.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var o=goog.require("incrementaldom"),r=o.elementOpen,a=o.elementClose,i=(o.elementVoid,o.elementOpenStart,o.elementOpenEnd,o.text),u=(o.attr,c.default.getTemplate("ElectricCode.incrementaldom","render")),p=c.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="IbWVy.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var f=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),t}(p.default);c.default.register(f,l),t.IbWVy=f,t.templates=l,t.default=l}},[143]);