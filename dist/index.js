module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/envConfigs.ts":
/*!***************************!*\
  !*** ./src/envConfigs.ts ***!
  \***************************/
/*! exports provided: getEnvVars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvVars", function() { return getEnvVars; });
function getEnvVars() {
    return {
        awsContainerCredRelativeUri: process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI,
        awsContainerCredFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
    };
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: config, sendPushNotification, sendEmail, testApiGwConnection, createAndSendRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendPushNotification", function() { return sendPushNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendEmail", function() { return sendEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testApiGwConnection", function() { return testApiGwConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAndSendRequest", function() { return createAndSendRequest; });
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_RequestUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/RequestUtil */ "./src/util/RequestUtil.ts");
/* harmony import */ var _util_CredentialsUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/CredentialsUtil */ "./src/util/CredentialsUtil.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var REGION = "ap-southeast-1";
var BASE_PATH = "/api/services/";
var PN_PATH = BASE_PATH + "pushNotifications";
var EMAIL_PATH = BASE_PATH + "email";
var DEBUG_PATH = BASE_PATH + "debug";
var ENDPOINT, HOST, STAGE;
var PRIVATE = false;
var SIGN = true;
var CREDENTIAL_PROVIDER;
function config(options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!options.endpoint) {
                        throw new Error("endpoint is a required field");
                    }
                    ENDPOINT = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["Endpoint"](options.endpoint);
                    SIGN = !!options.sign;
                    PRIVATE = !!options.private;
                    HOST = options.host;
                    STAGE = options.stage;
                    CREDENTIAL_PROVIDER = options.credentialProvider;
                    if (!SIGN) return [3 /*break*/, 2];
                    return [4 /*yield*/, Object(_util_CredentialsUtil__WEBPACK_IMPORTED_MODULE_2__["checkCredentials"])(CREDENTIAL_PROVIDER)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function sendPushNotification(payload) {
    return createAndSendRequest(PN_PATH, 'POST', payload);
}
function sendEmail(payload) {
    return createAndSendRequest(EMAIL_PATH, 'POST', payload);
}
function testApiGwConnection() {
    return createAndSendRequest(DEBUG_PATH, 'GET');
}
/**
 * Creates and send the request based on input params.
 *
 * Also auto-refetch credentials and make request again if request fails from server error (>=500) or forbidden (403) due to outdated credentials
 * @param path URL path of request
 * @param method HTTP method
 * @param payload JSON object to send
 * @param maxRetries number of retries before throwing
 * @param numberOfRetriesUsed used for recursively calling itself
 */
function createAndSendRequest(path, method, payload, maxRetries, numberOfRetriesUsed) {
    if (maxRetries === void 0) { maxRetries = 2; }
    if (numberOfRetriesUsed === void 0) { numberOfRetriesUsed = 0; }
    return __awaiter(this, void 0, void 0, function () {
        var request, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 5]);
                    return [4 /*yield*/, createRequest(path, method, payload)];
                case 1:
                    request = _a.sent();
                    return [4 /*yield*/, Object(_util_RequestUtil__WEBPACK_IMPORTED_MODULE_1__["sendRequest"])(request)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    e_1 = _a.sent();
                    if (numberOfRetriesUsed >= maxRetries) {
                        throw e_1;
                    }
                    return [4 /*yield*/, createAndSendRequest(path, method, payload, maxRetries, ++numberOfRetriesUsed)];
                case 4: return [2 /*return*/, _a.sent()];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function createRequest(path, method, payload) {
    return __awaiter(this, void 0, void 0, function () {
        var request, signer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    request = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"](ENDPOINT, REGION);
                    request.method = method;
                    request.path = path;
                    request.headers["Host"] = ENDPOINT.host;
                    if (!!payload) {
                        request.body = JSON.stringify(payload);
                    }
                    if (STAGE) {
                        request.path = "/" + STAGE + request.path;
                    }
                    if (PRIVATE) {
                        request.headers["Host"] = HOST;
                    }
                    if (!SIGN) return [3 /*break*/, 2];
                    return [4 /*yield*/, Object(_util_CredentialsUtil__WEBPACK_IMPORTED_MODULE_2__["checkCredentials"])(CREDENTIAL_PROVIDER)];
                case 1:
                    _a.sent();
                    signer = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["Signers"].V4(request, "execute-api");
                    signer.addAuthorization(aws_sdk__WEBPACK_IMPORTED_MODULE_0__["config"].credentials, new Date());
                    _a.label = 2;
                case 2: return [2 /*return*/, request];
            }
        });
    });
}


/***/ }),

/***/ "./src/util/CredentialsUtil.ts":
/*!*************************************!*\
  !*** ./src/util/CredentialsUtil.ts ***!
  \*************************************/
/*! exports provided: checkCredentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCredentials", function() { return checkCredentials; });
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DateUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateUtil */ "./src/util/DateUtil.ts");
/* harmony import */ var _envConfigs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../envConfigs */ "./src/envConfigs.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var memoizee__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! memoizee */ "memoizee");
/* harmony import */ var memoizee__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(memoizee__WEBPACK_IMPORTED_MODULE_4__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





function checkCredentials(CREDENTIAL_PROVIDER) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!aws_sdk__WEBPACK_IMPORTED_MODULE_0__["config"].credentials || isAWSCredentialsExpired())) return [3 /*break*/, 2];
                    return [4 /*yield*/, loadCredentials(CREDENTIAL_PROVIDER)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function loadCredentials(CREDENTIAL_PROVIDER) {
    return __awaiter(this, void 0, void 0, function () {
        var configs, remoteProvider, ec2MetadataProvider, sharedIniFileProvider, providers, _a, awsContainerCredFullUri, awsContainerCredRelativeUri, providerChain, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    configs = { httpOptions: { timeout: 5000 }, maxRetries: 3 };
                    remoteProvider = function () { return new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["RemoteCredentials"](configs); };
                    ec2MetadataProvider = function () { return new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["EC2MetadataCredentials"](configs); };
                    sharedIniFileProvider = function () { return new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["SharedIniFileCredentials"]({ profile: "default" }); };
                    providers = [];
                    _a = Object(_envConfigs__WEBPACK_IMPORTED_MODULE_2__["getEnvVars"])(), awsContainerCredFullUri = _a.awsContainerCredFullUri, awsContainerCredRelativeUri = _a.awsContainerCredRelativeUri;
                    switch (CREDENTIAL_PROVIDER) {
                        case 'ecs':
                            // ECS
                            providers.push(remoteProvider);
                            break;
                        case 'ec2-metadata':
                            // EC2
                            providers.push(ec2MetadataProvider);
                            break;
                        case 'credentials':
                            // Local
                            providers.push(sharedIniFileProvider);
                            break;
                        default:
                            // ECS
                            if (awsContainerCredFullUri || awsContainerCredRelativeUri) {
                                providers.push(sharedIniFileProvider);
                                providers.push(remoteProvider);
                            }
                            // EC2
                            if (isEc2()) {
                                providers.push(ec2MetadataProvider);
                            }
                            // Local
                            if (!awsContainerCredFullUri && !awsContainerCredRelativeUri && !isEc2()) {
                                providers.push(sharedIniFileProvider);
                            }
                    }
                    providerChain = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["CredentialProviderChain"](providers);
                    _b = aws_sdk__WEBPACK_IMPORTED_MODULE_0__["config"];
                    return [4 /*yield*/, providerChain.resolvePromise()];
                case 1:
                    _b.credentials = _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function isAWSCredentialsExpired() {
    return aws_sdk__WEBPACK_IMPORTED_MODULE_0__["config"].credentials.expired
        // [DY] note: expireTime is a Date object with UTC time e.g. 2019-06-20T12:18:49.000Z
        || aws_sdk__WEBPACK_IMPORTED_MODULE_0__["config"].credentials.expireTime == null
        // 5 minutes based on AWS docs:https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html
        || aws_sdk__WEBPACK_IMPORTED_MODULE_0__["config"].credentials.expireTime < Object(_DateUtil__WEBPACK_IMPORTED_MODULE_1__["getDateAtLaterMinute"])(5);
}
function _isEc2() {
    try {
        var uuid = Object(fs__WEBPACK_IMPORTED_MODULE_3__["readFileSync"])("/sys/hypervisor/uuid").toString();
        return uuid.startsWith("ec2");
    }
    catch (e) {
        return false;
    }
}
var isEc2 = memoizee__WEBPACK_IMPORTED_MODULE_4__(_isEc2);


/***/ }),

/***/ "./src/util/DateUtil.ts":
/*!******************************!*\
  !*** ./src/util/DateUtil.ts ***!
  \******************************/
/*! exports provided: getDateAtLaterMinute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateAtLaterMinute", function() { return getDateAtLaterMinute; });
function getDateAtLaterMinute(minutesLater) {
    var time = new Date();
    time.setMinutes(time.getMinutes() + minutesLater);
    return time;
}


/***/ }),

/***/ "./src/util/RequestUtil.ts":
/*!*********************************!*\
  !*** ./src/util/RequestUtil.ts ***!
  \*********************************/
/*! exports provided: sendRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendRequest", function() { return sendRequest; });
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Send the request to AWS
 *
 * @returns {Promise} The response body
 * @throws  {message} Promise is rejected with an object e.g. { message: 'The security token included in the request is invalid.' }
 * @param {AWS.HttpRequest} request
 */
function sendRequest(request) {
    // [DY] No typescript declaration for NodeHttpClient: https://github.com/aws/aws-sdk-js/issues/1729
    var send = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__["NodeHttpClient"]();
    return new Promise(function (resolve, reject) {
        send.handleRequest(request, null, function (response) {
            var respBody = "";
            response.on("data", function (chunk) {
                respBody += chunk;
            });
            response.on("end", function () {
                if (isForbiddenRequestOrServerError(response)) {
                    reject(new Error(respBody));
                }
                try {
                    resolve(JSON.parse(respBody));
                }
                catch (e) {
                    reject(new Error(respBody));
                }
            });
        }, function (err) {
            reject(err);
        });
    });
}
function isForbiddenRequestOrServerError(response) {
    return response.statusCode === 403 && response.statusCode >= 500;
}


/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "memoizee":
/*!***************************!*\
  !*** external "memoizee" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("memoizee");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map