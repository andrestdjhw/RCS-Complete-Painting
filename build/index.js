/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emailjs/browser/es/api/sendPost.js"
/*!**********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/api/sendPost.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendPost: () => (/* binding */ sendPost)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");


const sendPost = async (url, data, headers = {}) => {
    const response = await fetch(_store_store__WEBPACK_IMPORTED_MODULE_1__.store.origin + url, {
        method: 'POST',
        headers,
        body: data,
    });
    const message = await response.text();
    const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(response.status, message);
    if (response.ok) {
        return responseStatus;
    }
    throw responseStatus;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js"
/*!****************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockedEmailError: () => (/* binding */ blockedEmailError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const blockedEmailError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(403, 'Forbidden');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js"
/*!********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headlessError: () => (/* binding */ headlessError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const headlessError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(451, 'Unavailable For Headless Browser');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   limitRateError: () => (/* binding */ limitRateError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");

const limitRateError = () => {
    return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(429, 'Too Many Requests');
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/index.js"
/*!***************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/index.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* reexport safe */ _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   init: () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init),
/* harmony export */   send: () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send),
/* harmony export */   sendForm: () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/EmailJSResponseStatus */ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js");
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/init/init */ "./node_modules/@emailjs/browser/es/methods/init/init.js");
/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/send/send */ "./node_modules/@emailjs/browser/es/methods/send/send.js");
/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    init: _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init,
    send: _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send,
    sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm,
    EmailJSResponseStatus: _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus,
});


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/init/init.js"
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/init/init.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");


/**
 * EmailJS global SDK config
 * @param {object} options - the EmailJS global SDK config options
 * @param {string} origin - the non-default EmailJS origin
 */
const init = (options, origin = 'https://api.emailjs.com') => {
    if (!options)
        return;
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__.buildOptions)(options);
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey = opts.publicKey;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless = opts.blockHeadless;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider = opts.storageProvider;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList = opts.blockList;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate = opts.limitRate;
    _store_store__WEBPACK_IMPORTED_MODULE_0__.store.origin = opts.origin || origin;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/send/send.js"
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/send/send.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   send: () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js");
/* harmony import */ var _utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateTemplateParams/validateTemplateParams */ "./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js");
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js");
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js");
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js");
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js");
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js");
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js");











/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templateParams - the template params, what will be set to the EmailJS template
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = async (serviceID, templateID, templateParams, options) => {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;
    const storageProvider = opts.storageProvider || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {
        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());
    }
    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_3__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_4__.validateTemplateParams)(templateParams);
    if (templateParams && (0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, templateParams)) {
        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());
    }
    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());
    }
    const params = {
        lib_version: '4.4.1',
        user_id: publicKey,
        service_id: serviceID,
        template_id: templateID,
        template_params: templateParams,
    };
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js"
/*!***********************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendForm: () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ "./node_modules/@emailjs/browser/es/store/store.js");
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/sendPost */ "./node_modules/@emailjs/browser/es/api/sendPost.js");
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js");
/* harmony import */ var _utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/validateForm/validateForm */ "./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js");
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js");
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js");
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ "./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js");
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js");
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ "./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js");
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js");
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ "./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js");











const findHTMLForm = (form) => {
    return typeof form === 'string' ? document.querySelector(form) : form;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = async (serviceID, templateID, form, options) => {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_2__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless;
    const storageProvider = _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider || opts.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList, ...opts.blockList };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate, ...opts.limitRate };
    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_5__.isHeadless)(navigator)) {
        return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_6__.headlessError)());
    }
    const currentForm = findHTMLForm(form);
    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_3__.validateForm)(currentForm);
    const formData = new FormData(currentForm);
    if ((0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_7__.isBlockedValueInParams)(blockList, formData)) {
        return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_8__.blockedEmailError)());
    }
    if (await (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_9__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
        return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_10__.limitRateError)());
    }
    formData.append('lib_version', '4.4.1');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', publicKey);
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_1__.sendPost)('/api/v1.0/email/send-form', formData);
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js"
/*!**************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailJSResponseStatus: () => (/* binding */ EmailJSResponseStatus)
/* harmony export */ });
class EmailJSResponseStatus {
    constructor(_status = 0, _text = 'Network Error') {
        this.status = _status;
        this.text = _text;
    }
}


/***/ },

/***/ "./node_modules/@emailjs/browser/es/store/store.js"
/*!*********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/store/store.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createWebStorage/createWebStorage */ "./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js");

const store = {
    origin: 'https://api.emailjs.com',
    blockHeadless: false,
    storageProvider: (0,_utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__.createWebStorage)(),
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildOptions: () => (/* binding */ buildOptions)
/* harmony export */ });
const buildOptions = (options) => {
    if (!options)
        return {};
    // support compatibility with SDK v3
    if (typeof options === 'string') {
        return {
            publicKey: options,
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (options.toString() === '[object Object]') {
        return options;
    }
    return {};
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js"
/*!*************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWebStorage: () => (/* binding */ createWebStorage)
/* harmony export */ });
const createWebStorage = () => {
    if (typeof localStorage === 'undefined')
        return;
    return {
        get: (key) => Promise.resolve(localStorage.getItem(key)),
        set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
        remove: (key) => Promise.resolve(localStorage.removeItem(key)),
    };
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBlockedValueInParams: () => (/* binding */ isBlockedValueInParams)
/* harmony export */ });
/* harmony import */ var _validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateBlockListParams/validateBlockListParams */ "./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js");

const isBlockListDisabled = (options) => {
    return !options.list?.length || !options.watchVariable;
};
const getValue = (data, name) => {
    return data instanceof FormData ? data.get(name) : data[name];
};
const isBlockedValueInParams = (options, params) => {
    if (isBlockListDisabled(options))
        return false;
    (0,_validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__.validateBlockListParams)(options.list, options.watchVariable);
    const value = getValue(params, options.watchVariable);
    if (typeof value !== 'string')
        return false;
    return options.list.includes(value);
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js"
/*!*************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHeadless: () => (/* binding */ isHeadless)
/* harmony export */ });
const isHeadless = (navigator) => {
    return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLimitRateHit: () => (/* binding */ isLimitRateHit)
/* harmony export */ });
/* harmony import */ var _validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateLimitRateParams/validateLimitRateParams */ "./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js");

const getLeftTime = async (id, throttle, storage) => {
    const lastTime = Number((await storage.get(id)) || 0);
    return throttle - Date.now() + lastTime;
};
const isLimitRateHit = async (defaultID, options, storage) => {
    if (!options.throttle || !storage) {
        return false;
    }
    (0,_validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_0__.validateLimitRateParams)(options.throttle, options.id);
    const id = options.id || defaultID;
    const leftTime = await getLeftTime(id, options.throttle, storage);
    if (leftTime > 0) {
        return true;
    }
    await storage.set(id, Date.now().toString());
    return false;
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateBlockListParams: () => (/* binding */ validateBlockListParams)
/* harmony export */ });
const validateBlockListParams = (list, watchVariable) => {
    if (!Array.isArray(list)) {
        throw 'The BlockList list has to be an array';
    }
    if (typeof watchVariable !== 'string') {
        throw 'The BlockList watchVariable has to be a string';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js"
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
const validateForm = (form) => {
    if (!form || form.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js"
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js ***!
  \***************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateLimitRateParams: () => (/* binding */ validateLimitRateParams)
/* harmony export */ });
const validateLimitRateParams = (throttle, id) => {
    if (typeof throttle !== 'number' || throttle < 0) {
        throw 'The LimitRate throttle has to be a positive number';
    }
    if (id && typeof id !== 'string') {
        throw 'The LimitRate ID has to be a non-empty string';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js"
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js ***!
  \*********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateParams: () => (/* binding */ validateParams)
/* harmony export */ });
const validateParams = (publicKey, serviceID, templateID) => {
    if (!publicKey || typeof publicKey !== 'string') {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID || typeof serviceID !== 'string') {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID || typeof templateID !== 'string') {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
};


/***/ },

/***/ "./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js"
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateTemplateParams: () => (/* binding */ validateTemplateParams)
/* harmony export */ });
const validateTemplateParams = (templateParams) => {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    if (templateParams && templateParams.toString() !== '[object Object]') {
        throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
    }
};


/***/ },

/***/ "./src/scripts/Footer.js"
/*!*******************************!*\
  !*** ./src/scripts/Footer.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


// ─────────────────────────────────────────────────────────────────────────────
// Brand tokens — light aesthetic (flyer-inspired)
// ─────────────────────────────────────────────────────────────────────────────

const BRAND = {
  red: "#CC0000",
  redDark: "#A80000",
  redLight: "#fff0f0",
  ink: "#1A1A1A",
  charcoal: "#2B2B2B",
  bg: "#F6F6F4",
  bg2: "#FFFFFF",
  bg3: "#F0EFED",
  bg4: "#E8E7E5",
  border: "rgba(0,0,0,0.09)",
  muted: "rgba(0,0,0,0.50)",
  dim: "rgba(0,0,0,0.30)"
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG Icons
// ─────────────────────────────────────────────────────────────────────────────

const IconFacebook = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  width: "18",
  height: "18",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  })
});
const IconInstagram = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  width: "18",
  height: "18",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
  })
});
const IconGoogle = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    fill: "#FBBC05",
    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    fill: "#EA4335",
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
  })]
});
const IconEmail = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: "15",
  height: "15",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
    points: "2,4 12,13 22,4"
  })]
});
const IconPhone = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  width: "15",
  height: "15",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.8 19.8 0 01.99 2.2 2 2 0 013 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"
  })
});
const IconPin = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: "15",
  height: "15",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })]
});
const IconArrow = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  width: "12",
  height: "12",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
    points: "9,18 15,12 9,6"
  })
});

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const SERVICES = [{
  label: "Interior Painting",
  href: "/services/multifamily-interior-painting"
}, {
  label: "Exterior Painting",
  href: "/services/multifamily-exterior-painting"
}, {
  label: "Specialty Coatings",
  href: "/services/specialty-coatings"
}, {
  label: "All Services",
  href: "/services"
}];
const QUICK_LINKS = [{
  label: "About Us",
  href: "/about-us"
}, {
  label: "Services",
  href: "/services"
}, {
  label: "Locations",
  href: "/locations"
}, {
  label: "Contact Us",
  href: "/contact-us"
}];
const TX_MARKETS = [{
  label: "Austin, TX — HQ",
  href: "/locations/austin"
}, {
  label: "Houston, TX",
  href: "/locations/houston"
}, {
  label: "Dallas–Fort Worth, TX",
  href: "/locations/dallas-fort-worth"
}, {
  label: "San Antonio, TX",
  href: "/locations/san-antonio"
}];
const REGIONAL_STATES = ["Oklahoma", "Louisiana", "Arkansas", "New Mexico"];

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

const ColHeading = ({
  children
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
  style: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "11px",
    fontWeight: 900,
    letterSpacing: ".2em",
    textTransform: "uppercase",
    color: BRAND.ink,
    marginBottom: "18px",
    paddingLeft: "10px",
    borderLeft: `3px solid ${BRAND.red}`
  },
  children: children
});
const FooterLink = ({
  href,
  children
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
  href: href,
  className: "flex items-center gap-2 text-sm transition-colors duration-150 group",
  style: {
    color: BRAND.muted,
    textDecoration: "none"
  },
  onMouseEnter: e => e.currentTarget.style.color = BRAND.red,
  onMouseLeave: e => e.currentTarget.style.color = BRAND.muted,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
    className: "opacity-0 group-hover:opacity-100 transition-opacity duration-150",
    style: {
      color: BRAND.red
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconArrow, {})
  }), children]
});

// ─────────────────────────────────────────────────────────────────────────────
// Footer Component
//
// Props:
//   logoUrl — window.rcsTheme?.logoUrl (via wp_localize_script)
// ─────────────────────────────────────────────────────────────────────────────

function Footer({
  logoUrl
}) {
  const year = new Date().getFullYear();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("footer", {
    style: {
      fontFamily: "'DM Sans', sans-serif",
      background: BRAND.bg
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "relative overflow-hidden py-12 px-6",
      style: {
        background: BRAND.red
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        style: {
          position: "absolute",
          top: "-40%",
          right: "-8%",
          width: "55%",
          height: "200%",
          background: "rgba(0,0,0,0.06)",
          borderRadius: "50%",
          pointerEvents: "none"
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
            style: {
              color: "#fff",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 900,
              letterSpacing: "-.01em",
              lineHeight: 1.1
            },
            children: ["Your next multifamily project deserves", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {
              className: "hidden md:block"
            }), " a painter who delivers."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            style: {
              color: "rgba(255,255,255,.75)",
              fontSize: "14px",
              marginTop: "6px"
            },
            children: "Request a bid \u2014 we respond within one business day."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/contact-us",
          className: "shrink-0 transition-all duration-150 active:scale-95",
          style: {
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "13px 28px",
            background: "#fff",
            color: BRAND.red,
            fontWeight: 800,
            fontSize: "13px",
            letterSpacing: ".06em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "50px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
          },
          onMouseEnter: e => {
            e.currentTarget.style.background = BRAND.bg4;
            e.currentTarget.style.color = BRAND.redDark;
          },
          onMouseLeave: e => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.color = BRAND.red;
          },
          children: "Request a project bid \u2192"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "max-w-7xl mx-auto px-6 py-14",
      style: {
        borderBottom: `1px solid ${BRAND.border}`
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "lg:col-span-1 flex flex-col gap-5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "/",
            "aria-label": "RCS Complete Painting \u2014 Home",
            children: logoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: logoUrl,
              alt: "RCS Complete Painting LLC",
              className: "w-auto object-contain",
              style: {
                height: "120px"
              }
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              style: {
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "22px",
                fontWeight: 900,
                color: BRAND.ink,
                letterSpacing: "-.02em"
              },
              children: ["RCS ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                style: {
                  color: BRAND.red
                },
                children: "Complete Painting"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
            style: {
              fontSize: "14px",
              color: BRAND.muted,
              lineHeight: 1.7
            },
            children: ["Multifamily new construction painting specialist.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "Texas + Oklahoma, Louisiana, Arkansas, New Mexico."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
            className: "flex flex-col gap-2.5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: "mailto:marisa@rcscomplete.com",
                className: "flex items-center gap-2.5 text-sm transition-colors duration-150",
                style: {
                  color: BRAND.muted,
                  textDecoration: "none"
                },
                onMouseEnter: e => e.currentTarget.style.color = BRAND.red,
                onMouseLeave: e => e.currentTarget.style.color = BRAND.muted,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  style: {
                    color: BRAND.red
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconEmail, {})
                }), "marisa@rcscomplete.com"]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                href: "tel:+15125513050",
                className: "flex items-center gap-2.5 text-sm transition-colors duration-150",
                style: {
                  color: BRAND.muted,
                  textDecoration: "none"
                },
                onMouseEnter: e => e.currentTarget.style.color = BRAND.red,
                onMouseLeave: e => e.currentTarget.style.color = BRAND.muted,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  style: {
                    color: BRAND.red
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconPhone, {})
                }), "512-551-3050"]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                className: "flex items-start gap-2.5 text-sm",
                style: {
                  color: BRAND.muted
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "mt-0.5 shrink-0",
                  style: {
                    color: BRAND.red
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconPin, {})
                }), "Austin, TX (HQ) \u2014 Serving TX, OK, LA, AR, NM"]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center gap-2.5 pt-1",
            children: [[{
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconFacebook, {}),
              label: "Facebook",
              href: "#"
            }, {
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconInstagram, {}),
              label: "Instagram",
              href: "#"
            }, {
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconGoogle, {}),
              label: "Google My Business",
              href: "#"
            }].map(({
              icon,
              label,
              href
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: href,
              "aria-label": label,
              className: "transition-all duration-150",
              style: {
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: BRAND.muted,
                background: BRAND.bg4,
                border: `1px solid ${BRAND.border}`
              },
              onMouseEnter: e => {
                e.currentTarget.style.background = BRAND.red;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = BRAND.red;
              },
              onMouseLeave: e => {
                e.currentTarget.style.background = BRAND.bg4;
                e.currentTarget.style.color = BRAND.muted;
                e.currentTarget.style.borderColor = BRAND.border;
              },
              children: icon
            }, label)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "#",
              "aria-label": "Better Business Bureau",
              className: "transition-all duration-150",
              style: {
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "9px",
                fontWeight: 900,
                letterSpacing: ".1em",
                color: BRAND.red,
                background: BRAND.redLight,
                border: `1px solid rgba(204,0,0,0.2)`
              },
              onMouseEnter: e => {
                e.currentTarget.style.background = BRAND.red;
                e.currentTarget.style.color = "#fff";
              },
              onMouseLeave: e => {
                e.currentTarget.style.background = BRAND.redLight;
                e.currentTarget.style.color = BRAND.red;
              },
              children: "BBB"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColHeading, {
            children: "Services"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
            className: "flex flex-col gap-2 mb-8",
            children: SERVICES.map(({
              label,
              href
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FooterLink, {
                href: href,
                children: label
              })
            }, label))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColHeading, {
            children: "Quick Links"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
            className: "flex flex-col gap-2",
            children: QUICK_LINKS.map(({
              label,
              href
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FooterLink, {
                href: href,
                children: label
              })
            }, label))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColHeading, {
            children: "Texas Markets"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
            className: "flex flex-col gap-2 mb-8",
            children: TX_MARKETS.map(({
              label,
              href
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FooterLink, {
                href: href,
                children: label
              })
            }, label))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColHeading, {
            children: "Regional States"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
            className: "flex flex-col gap-2",
            children: REGIONAL_STATES.map(state => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                style: {
                  fontSize: "14px",
                  color: BRAND.muted
                },
                children: state
              })
            }, state))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ColHeading, {
            children: "Trust & Credentials"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "flex flex-col gap-3 mb-7",
            children: [{
              badge: "LIC",
              desc: "State licensed contractor"
            }, {
              badge: "INS",
              desc: "Fully insured — GL, WC & auto"
            }, {
              badge: "BBB",
              desc: "Better Business Bureau accredited"
            }, {
              badge: "5★",
              desc: "Top rated on Google My Business"
            }].map(({
              badge,
              desc
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "flex items-center gap-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "shrink-0 flex items-center justify-center",
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: BRAND.redLight,
                  border: `1px solid rgba(204,0,0,0.2)`,
                  color: BRAND.red,
                  fontSize: "10px",
                  fontWeight: 900,
                  letterSpacing: ".08em"
                },
                children: badge
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                style: {
                  fontSize: "12px",
                  color: BRAND.muted,
                  lineHeight: 1.4
                },
                children: desc
              })]
            }, badge))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "rounded-xl p-4",
            style: {
              background: BRAND.bg4,
              border: `1px solid ${BRAND.border}`
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              style: {
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: BRAND.red,
                marginBottom: "10px"
              },
              children: "Office Hours"
            }), [{
              day: "Mon – Fri",
              hours: "7:00 AM – 6:00 PM"
            }, {
              day: "Saturday",
              hours: "8:00 AM – 4:00 PM"
            }, {
              day: "Sunday",
              hours: "Closed"
            }].map(({
              day,
              hours
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "flex justify-between text-xs py-1.5",
              style: {
                borderBottom: `1px solid ${BRAND.border}`
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                style: {
                  color: BRAND.dim
                },
                children: day
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                style: {
                  color: BRAND.charcoal,
                  fontWeight: 700
                },
                children: hours
              })]
            }, day))]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            style: {
              fontSize: "11px",
              color: BRAND.dim,
              marginTop: "12px"
            },
            children: "DUNS #082349795 \xB7 Hispanic-Owned Business"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      style: {
        background: BRAND.bg3
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
          style: {
            fontSize: "12px",
            color: BRAND.dim
          },
          children: ["\xA9 ", year, " RCS Complete Painting LLC. All rights reserved."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "flex items-center gap-5",
          children: [{
            label: "Privacy Policy",
            href: "/privacy"
          }, {
            label: "Terms of Service",
            href: "/terms"
          }, {
            label: "Sitemap",
            href: "/sitemap.xml"
          }].map(({
            label,
            href
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: href,
            style: {
              fontSize: "12px",
              color: BRAND.dim,
              textDecoration: "none",
              transition: "color .15s"
            },
            onMouseEnter: e => e.currentTarget.style.color = BRAND.red,
            onMouseLeave: e => e.currentTarget.style.color = BRAND.dim,
            children: label
          }, label))
        })]
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ },

/***/ "./src/scripts/HeroBidForm.js"
/*!************************************!*\
  !*** ./src/scripts/HeroBidForm.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ "./node_modules/@emailjs/browser/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// ─────────────────────────────────────────────────────────────────────────────
// Config — rellenar con los IDs de EmailJS
// ─────────────────────────────────────────────────────────────────────────────

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

// ─────────────────────────────────────────────────────────────────────────────
// Brand tokens
// ─────────────────────────────────────────────────────────────────────────────
const B = {
  red: "#CC0000",
  redDark: "#A80000",
  redLight: "#fff0f0",
  ink: "#1A1A1A",
  bg: "#FFFFFF",
  bg2: "#F6F6F4",
  border: "rgba(0,0,0,0.10)",
  muted: "rgba(0,0,0,0.45)"
};

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const inputStyle = error => ({
  width: "100%",
  padding: "10px 14px",
  fontSize: "14px",
  fontFamily: "'DM Sans', sans-serif",
  color: B.ink,
  background: B.bg2,
  border: `1.5px solid ${error ? B.red : B.border}`,
  borderRadius: "8px",
  outline: "none",
  transition: "border-color .15s, box-shadow .15s"
});
const labelStyle = {
  display: "block",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: ".06em",
  textTransform: "uppercase",
  color: B.muted,
  marginBottom: "5px"
};

// ─────────────────────────────────────────────────────────────────────────────
// Form Component
// ─────────────────────────────────────────────────────────────────────────────

function HeroBidForm() {
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    project_address: "",
    project_type: "",
    unit_count: "",
    scope: [],
    role: "",
    company: "",
    name: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("idle"); // idle | sending | success | error
  const [focusedField, setFocusedField] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };
  const handleScope = value => {
    setForm(prev => ({
      ...prev,
      scope: prev.scope.includes(value) ? prev.scope.filter(s => s !== value) : [...prev.scope, value]
    }));
  };
  const validate = () => {
    const e = {};
    if (!form.project_address.trim()) e.project_address = "Required";
    if (!form.project_type) e.project_type = "Required";
    if (!form.unit_count) e.unit_count = "Required";
    if (form.scope.length === 0) e.scope = "Select at least one";
    if (!form.role) e.role = "Required";
    if (!form.company.trim()) e.company = "Required";
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    return e;
  };
  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setStatus("sending");
    const templateParams = {
      project_address: form.project_address,
      project_type: form.project_type,
      unit_count: form.unit_count,
      scope: form.scope.join(", "),
      role: form.role,
      company: form.company,
      name: form.name,
      email: form.email,
      phone: form.phone || "—"
    };
    try {
      await _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__["default"].send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  // ── Focus helpers ──────────────────────────────────────────────────────────
  const focusStyle = name => ({
    ...inputStyle(errors[name]),
    ...(focusedField === name && {
      borderColor: B.red,
      boxShadow: `0 0 0 3px rgba(204,0,0,0.10)`,
      background: "#fff"
    })
  });

  // ── Success state ──────────────────────────────────────────────────────────
  if (status === "success") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        background: B.bg,
        borderRadius: "16px",
        padding: "40px 32px",
        boxShadow: "0 24px 60px rgba(0,0,0,0.10)",
        textAlign: "center"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: {
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: B.redLight,
          border: `2px solid ${B.red}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 16px"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
          width: "24",
          height: "24",
          fill: "none",
          stroke: B.red,
          strokeWidth: "2.5",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polyline", {
            points: "20 6 9 17 4 12"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
        style: {
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "22px",
          fontWeight: 900,
          color: B.ink,
          marginBottom: "8px"
        },
        children: "Project received."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        style: {
          fontSize: "14px",
          color: B.muted,
          lineHeight: 1.7,
          maxWidth: "320px",
          margin: "0 auto 20px"
        },
        children: "The owner will review your scope personally and respond within one business day."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        style: {
          fontSize: "13px",
          color: B.muted
        },
        children: "For active bids with tight timelines, call us directly:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: "tel:+15125513050",
        style: {
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "20px",
          fontWeight: 900,
          color: B.red,
          textDecoration: "none"
        },
        children: "512-551-3050"
      })]
    });
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: {
      background: B.bg,
      borderRadius: "16px",
      padding: "32px 28px",
      boxShadow: "0 24px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
      fontFamily: "'DM Sans', sans-serif"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        marginBottom: "24px"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        style: {
          fontSize: "10px",
          fontWeight: 800,
          letterSpacing: ".2em",
          textTransform: "uppercase",
          color: B.red,
          marginBottom: "6px"
        },
        children: "Request a Project Bid"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
        style: {
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "22px",
          fontWeight: 900,
          color: B.ink,
          lineHeight: 1.1,
          marginBottom: "4px"
        },
        children: "Tell us about your project."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        style: {
          fontSize: "13px",
          color: B.muted
        },
        children: "We respond within one business day."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "14px"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          style: labelStyle,
          children: "Project name or address *"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          name: "project_address",
          placeholder: "123 Main St, Austin TX or Project Name",
          value: form.project_address,
          onChange: handleChange,
          onFocus: () => setFocusedField("project_address"),
          onBlur: () => setFocusedField(null),
          style: focusStyle("project_address")
        }), errors.project_address && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          style: {
            fontSize: "11px",
            color: B.red,
            marginTop: "4px"
          },
          children: errors.project_address
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
            style: labelStyle,
            children: "Project type *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
            name: "project_type",
            value: form.project_type,
            onChange: handleChange,
            onFocus: () => setFocusedField("project_type"),
            onBlur: () => setFocusedField(null),
            style: {
              ...focusStyle("project_type"),
              cursor: "pointer"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "",
              children: "Select\u2026"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "Garden-style",
              children: "Garden-style"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "Mid-rise",
              children: "Mid-rise"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "Senior housing",
              children: "Senior housing"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "Townhomes",
              children: "Townhomes"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "Mixed-use",
              children: "Mixed-use"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "Other",
              children: "Other"
            })]
          }), errors.project_type && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            style: {
              fontSize: "11px",
              color: B.red,
              marginTop: "4px"
            },
            children: errors.project_type
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
            style: labelStyle,
            children: "Unit count *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            name: "unit_count",
            type: "number",
            placeholder: "e.g. 240",
            value: form.unit_count,
            onChange: handleChange,
            onFocus: () => setFocusedField("unit_count"),
            onBlur: () => setFocusedField(null),
            style: focusStyle("unit_count")
          }), errors.unit_count && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            style: {
              fontSize: "11px",
              color: B.red,
              marginTop: "4px"
            },
            children: errors.unit_count
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          style: labelStyle,
          children: "Scope needed *"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            display: "flex",
            flexWrap: "wrap",
            gap: "8px"
          },
          children: ["Interior", "Exterior", "Specialty coatings", "Color consulting"].map(s => {
            const active = form.scope.includes(s);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
              type: "button",
              onClick: () => handleScope(s),
              style: {
                padding: "6px 14px",
                fontSize: "12px",
                fontWeight: 700,
                fontFamily: "'DM Sans', sans-serif",
                border: `1.5px solid ${active ? B.red : B.border}`,
                borderRadius: "50px",
                background: active ? B.redLight : "#fff",
                color: active ? B.red : B.muted,
                cursor: "pointer",
                transition: "all .15s"
              },
              children: s
            }, s);
          })
        }), errors.scope && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          style: {
            fontSize: "11px",
            color: B.red,
            marginTop: "4px"
          },
          children: errors.scope
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
            style: labelStyle,
            children: "Your role *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
            name: "role",
            value: form.role,
            onChange: handleChange,
            onFocus: () => setFocusedField("role"),
            onBlur: () => setFocusedField(null),
            style: {
              ...focusStyle("role"),
              cursor: "pointer"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "",
              children: "Select\u2026"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "GC",
              children: "General Contractor"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "Developer",
              children: "Developer"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "PM",
              children: "Project Manager"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "Owner",
              children: "Owner"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "Architect",
              children: "Architect"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
              value: "Other",
              children: "Other"
            })]
          }), errors.role && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            style: {
              fontSize: "11px",
              color: B.red,
              marginTop: "4px"
            },
            children: errors.role
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
            style: labelStyle,
            children: "Company *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            name: "company",
            placeholder: "Company name",
            value: form.company,
            onChange: handleChange,
            onFocus: () => setFocusedField("company"),
            onBlur: () => setFocusedField(null),
            style: focusStyle("company")
          }), errors.company && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            style: {
              fontSize: "11px",
              color: B.red,
              marginTop: "4px"
            },
            children: errors.company
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          style: labelStyle,
          children: "Your name *"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          name: "name",
          placeholder: "Full name",
          value: form.name,
          onChange: handleChange,
          onFocus: () => setFocusedField("name"),
          onBlur: () => setFocusedField(null),
          style: focusStyle("name")
        }), errors.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          style: {
            fontSize: "11px",
            color: B.red,
            marginTop: "4px"
          },
          children: errors.name
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
            style: labelStyle,
            children: "Email *"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            name: "email",
            type: "email",
            placeholder: "you@company.com",
            value: form.email,
            onChange: handleChange,
            onFocus: () => setFocusedField("email"),
            onBlur: () => setFocusedField(null),
            style: focusStyle("email")
          }), errors.email && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            style: {
              fontSize: "11px",
              color: B.red,
              marginTop: "4px"
            },
            children: errors.email
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
            style: labelStyle,
            children: "Phone"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            name: "phone",
            type: "tel",
            placeholder: "(512) 000-0000",
            value: form.phone,
            onChange: handleChange,
            onFocus: () => setFocusedField("phone"),
            onBlur: () => setFocusedField(null),
            style: focusStyle("phone")
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        type: "button",
        onClick: handleSubmit,
        disabled: status === "sending",
        style: {
          width: "100%",
          padding: "14px",
          background: status === "sending" ? "#999" : B.red,
          color: "#fff",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "13px",
          fontWeight: 800,
          letterSpacing: ".08em",
          textTransform: "uppercase",
          border: "none",
          borderRadius: "50px",
          cursor: status === "sending" ? "not-allowed" : "pointer",
          transition: "background .15s, transform .1s",
          boxShadow: `0 4px 20px rgba(204,0,0,0.25)`,
          marginTop: "4px"
        },
        onMouseEnter: e => {
          if (status !== "sending") e.currentTarget.style.background = B.redDark;
        },
        onMouseLeave: e => {
          if (status !== "sending") e.currentTarget.style.background = B.red;
        },
        onMouseDown: e => {
          e.currentTarget.style.transform = "scale(.98)";
        },
        onMouseUp: e => {
          e.currentTarget.style.transform = "scale(1)";
        },
        children: status === "sending" ? "Sending…" : "Submit project bid →"
      }), status === "error" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
        style: {
          fontSize: "12px",
          color: B.red,
          textAlign: "center"
        },
        children: ["Something went wrong. Call us directly: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: "tel:+15125513050",
          style: {
            color: B.red
          },
          children: "512-551-3050"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        style: {
          fontSize: "11px",
          color: B.muted,
          textAlign: "center",
          lineHeight: 1.5
        },
        children: "Your information is only used to respond to your bid request."
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroBidForm);

/***/ },

/***/ "./src/scripts/Navbar.js"
/*!*******************************!*\
  !*** ./src/scripts/Navbar.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


// ─────────────────────────────────────────────────────────────────────────────
// Brand tokens — ajustar aquí si cambian los colores
// ─────────────────────────────────────────────────────────────────────────────

const BRAND = {
  red: "#CC0000",
  redDark: "#A80000",
  redLight: "#fff0f0",
  charcoal: "#2B2B2B",
  dark: "#1A1A1A"
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG Icons
// ─────────────────────────────────────────────────────────────────────────────

const IconEmail = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: "14",
  height: "14",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
    points: "2,4 12,13 22,4"
  })]
});
const IconPhone = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  width: "14",
  height: "14",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.8 19.8 0 01.99 2.2 2 2 0 013 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"
  })
});
const IconFacebook = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  width: "16",
  height: "16",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  })
});
const IconInstagram = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  width: "16",
  height: "16",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
  })
});
const IconGoogle = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    fill: "#FBBC05",
    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    fill: "#EA4335",
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
  })]
});
const IconChevronDown = ({
  className = ""
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  width: "13",
  height: "13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.25",
  viewBox: "0 0 24 24",
  className: className,
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
    points: "6,9 12,15 18,9"
  })
});
const IconMenu = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: "22",
  height: "22",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  })]
});
const IconX = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: "22",
  height: "22",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })]
});

// ─────────────────────────────────────────────────────────────────────────────
// Nav structure
// ─────────────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [{
  label: "Home",
  href: "/"
}, {
  label: "About Us",
  href: "/about"
}, {
  label: "Services",
  href: "/services",
  children: [{
    label: "Interior Painting",
    href: "/services/interior",
    desc: "Commercial & residential interiors"
  }, {
    label: "Exterior Painting",
    href: "/services/exterior",
    desc: "Curb appeal & weather protection"
  }, {
    label: "Specialty Coatings",
    href: "/services/specialty",
    desc: "Epoxy, texture & custom finishes"
  }]
}, {
  label: "Locations",
  href: "/locations"
}, {
  label: "Contact Us",
  href: "/contact",
  isCta: true
}];

// ─────────────────────────────────────────────────────────────────────────────
// Navbar Component
//
// Props:
//   logoUrl  — URL del logo. En WordPress, pasar via wp_localize_script:
//              wp_localize_script('ourmainjs', 'rcsTheme', [
//                'logoUrl' => get_theme_file_uri('/assets/images/logo.png'),
//              ]);
//              Y en index.js: <Navbar logoUrl={window.rcsTheme?.logoUrl} />
// ─────────────────────────────────────────────────────────────────────────────

function Navbar({
  logoUrl
}) {
  const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [activeDropdown, setActiveDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [mobileOpen, setMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [mobileServicesOpen, setMobileServicesOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // ── Scroll detection ──
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close dropdown on outside click ──
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onClick = e => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // ── Close mobile menu on resize to desktop ──
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header", {
    className: "fixed top-0 inset-x-0 z-50",
    ref: navRef,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: `
          text-slate-300 text-sm
          transition-all duration-300 ease-in-out overflow-hidden
          ${scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"}
        `,
      style: {
        background: BRAND.dark
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-6 h-11 flex items-center justify-between gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center gap-5 shrink-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "mailto:marisa@rcscomplete.com",
            className: "flex items-center gap-2 hover:text-white transition-colors duration-150",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconEmail, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "hidden sm:inline",
              children: "marisa@rcscomplete.com"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "sm:hidden",
              children: "Email"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "w-px h-4 bg-white/10 hidden sm:block"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "tel:+15551234567",
            className: "flex items-center gap-2 hover:text-white transition-colors duration-150",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconPhone, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: "(555) 123-4567"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "absolute left-1/2 -translate-x-1/2 pointer-events-auto hidden md:block",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: "https://www.google.com/maps/place/RCS+Complete+Painting+LLC/@30.2293081,-97.6841226,17z/data=!3m1!4b1!4m6!3m5!1s0x8644bb0df1290d77:0x4968a1633c456fd0!8m2!3d30.2293081!4d-97.6841226!16s%2Fg%2F11mhr_z2fw?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors duration-150",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
              width: "11",
              height: "11",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
                cx: "12",
                cy: "10",
                r: "3"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "text-[10px] tracking-[0.18em] uppercase font-semibold select-none whitespace-nowrap",
              children: "Professional Multi-Family Painters Across Texas"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "flex items-center gap-4 shrink-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "#",
            "aria-label": "Facebook",
            className: "hover:text-white transition-colors duration-150",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconFacebook, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "#",
            "aria-label": "Instagram",
            className: "hover:text-white transition-colors duration-150",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconInstagram, {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "#",
            "aria-label": "Better Business Bureau",
            className: "text-[9px] font-black tracking-widest border border-white/20 hover:border-white/60 hover:text-white px-1.5 py-0.5 rounded transition-colors duration-150 leading-none",
            children: "BBB"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "#",
            "aria-label": "Google My Business",
            className: "hover:opacity-80 transition-opacity duration-150",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconGoogle, {})
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
      className: `
          bg-white border-b border-slate-100
          transition-shadow duration-300
          ${scrolled ? "shadow-lg shadow-black/10" : ""}
        `,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-6 h-[100px] flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
          href: "/",
          className: "flex items-center shrink-0 group",
          "aria-label": "RCS Complete Painting \u2014 Home",
          children: logoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
            src: logoUrl,
            alt: "RCS Complete Painting LLC",
            className: "h-30 w-auto object-contain transition-opacity duration-150 group-hover:opacity-85"
          }) :
          /*#__PURE__*/
          /* Fallback si no hay logoUrl */
          (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center gap-2.5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "w-9 h-9 rounded-lg flex items-center justify-center",
              style: {
                background: BRAND.red
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "text-white font-black text-sm tracking-tight",
                children: "RC"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "leading-none",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "block font-black text-[18px] tracking-tight",
                style: {
                  color: BRAND.charcoal
                },
                children: "RCS"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "block text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5",
                style: {
                  color: BRAND.red
                },
                children: "Complete Painting"
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
          className: "hidden lg:flex items-center gap-0.5",
          children: NAV_ITEMS.map(item => {
            // CTA button — Contact Us
            if (item.isCta) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                  href: item.href,
                  className: "ml-3 inline-flex items-center px-5 py-2.5 text-white text-sm font-bold rounded-lg active:scale-95 transition-all duration-150 shadow-sm",
                  style: {
                    background: BRAND.red
                  },
                  onMouseEnter: e => e.currentTarget.style.background = BRAND.redDark,
                  onMouseLeave: e => e.currentTarget.style.background = BRAND.red,
                  children: item.label
                })
              }, item.label);
            }

            // Dropdown — Services
            if (item.children) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
                className: "relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
                  onMouseEnter: () => setActiveDropdown(item.label),
                  onMouseLeave: () => setActiveDropdown(null),
                  onClick: () => setActiveDropdown(activeDropdown === item.label ? null : item.label),
                  className: "flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-150",
                  style: {
                    color: BRAND.charcoal
                  },
                  onMouseEnterCapture: e => {
                    e.currentTarget.style.color = BRAND.red;
                    e.currentTarget.style.background = BRAND.redLight;
                  },
                  onMouseLeaveCapture: e => {
                    e.currentTarget.style.color = BRAND.charcoal;
                    e.currentTarget.style.background = "transparent";
                  },
                  "aria-expanded": activeDropdown === item.label,
                  "aria-haspopup": "true",
                  children: [item.label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconChevronDown, {
                    className: `transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  onMouseEnter: () => setActiveDropdown(item.label),
                  onMouseLeave: () => setActiveDropdown(null),
                  className: `
                        absolute top-full left-0 pt-1.5
                        transition-all duration-200 origin-top-left
                        ${activeDropdown === item.label ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
                      `,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    className: "w-60 bg-white rounded-xl border border-slate-100 shadow-xl shadow-black/10 overflow-hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                      className: "p-1.5",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                        href: item.href,
                        className: "flex items-center px-3 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 rounded-lg transition-colors duration-150 hover:bg-slate-50",
                        style: {
                          "--hover-color": BRAND.red
                        },
                        onMouseEnter: e => e.currentTarget.style.color = BRAND.red,
                        onMouseLeave: e => e.currentTarget.style.color = "",
                        children: "All Services \u2192"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                        className: "h-px bg-slate-100 mx-2 my-1"
                      }), item.children.map(child => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                        href: child.href,
                        className: "flex flex-col px-3 py-2.5 rounded-lg transition-colors duration-150 group/item",
                        onMouseEnter: e => e.currentTarget.style.background = BRAND.redLight,
                        onMouseLeave: e => e.currentTarget.style.background = "transparent",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                          className: "text-sm font-semibold transition-colors duration-150",
                          style: {
                            color: BRAND.charcoal
                          },
                          children: child.label
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                          className: "text-xs text-slate-400 mt-0.5",
                          children: child.desc
                        })]
                      }, child.label))]
                    })
                  })
                })]
              }, item.label);
            }

            // Regular nav link
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                href: item.href,
                className: "flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-150",
                style: {
                  color: BRAND.charcoal
                },
                onMouseEnter: e => {
                  e.currentTarget.style.color = BRAND.red;
                  e.currentTarget.style.background = BRAND.redLight;
                },
                onMouseLeave: e => {
                  e.currentTarget.style.color = BRAND.charcoal;
                  e.currentTarget.style.background = "transparent";
                },
                children: item.label
              })
            }, item.label);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "lg:hidden p-2 rounded-lg transition-colors duration-150",
          style: {
            color: BRAND.charcoal
          },
          onClick: () => setMobileOpen(!mobileOpen),
          "aria-label": mobileOpen ? "Close menu" : "Open menu",
          "aria-expanded": mobileOpen,
          children: mobileOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconX, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconMenu, {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: `
            lg:hidden border-t border-slate-100 overflow-hidden
            transition-all duration-300 ease-in-out
            ${mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}
          `,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "px-4 pt-3 pb-5 space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "/about",
            className: "flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-colors duration-150",
            style: {
              color: BRAND.charcoal
            },
            onMouseEnter: e => {
              e.currentTarget.style.color = BRAND.red;
              e.currentTarget.style.background = BRAND.redLight;
            },
            onMouseLeave: e => {
              e.currentTarget.style.color = BRAND.charcoal;
              e.currentTarget.style.background = "transparent";
            },
            children: "About Us"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
              onClick: () => setMobileServicesOpen(!mobileServicesOpen),
              className: "w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition-colors duration-150",
              style: {
                color: BRAND.charcoal
              },
              "aria-expanded": mobileServicesOpen,
              children: ["Services", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconChevronDown, {
                className: `transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: `
                  overflow-hidden transition-all duration-200
                  ${mobileServicesOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
                `,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "pl-4 pb-1 space-y-0.5",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                  href: "/services",
                  className: "flex px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 rounded-lg transition-colors duration-150 hover:bg-slate-50",
                  children: "All Services \u2192"
                }), NAV_ITEMS.find(i => i.label === "Services").children.map(child => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                  href: child.href,
                  className: "flex flex-col px-4 py-2.5 rounded-lg transition-colors duration-150",
                  style: {
                    color: BRAND.charcoal
                  },
                  onMouseEnter: e => e.currentTarget.style.background = BRAND.redLight,
                  onMouseLeave: e => e.currentTarget.style.background = "transparent",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    className: "text-sm font-semibold",
                    children: child.label
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    className: "text-xs text-slate-400 mt-0.5",
                    children: child.desc
                  })]
                }, child.label))]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: "/locations",
            className: "flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-colors duration-150",
            style: {
              color: BRAND.charcoal
            },
            onMouseEnter: e => {
              e.currentTarget.style.color = BRAND.red;
              e.currentTarget.style.background = BRAND.redLight;
            },
            onMouseLeave: e => {
              e.currentTarget.style.color = BRAND.charcoal;
              e.currentTarget.style.background = "transparent";
            },
            children: "Locations"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "pt-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
              href: "/contact",
              className: "flex items-center justify-center w-full py-3 text-white text-sm font-bold rounded-xl active:scale-95 transition-all duration-150 shadow-sm",
              style: {
                background: BRAND.red
              },
              onMouseEnter: e => e.currentTarget.style.background = BRAND.redDark,
              onMouseLeave: e => e.currentTarget.style.background = BRAND.red,
              children: "Contact Us"
            })
          })]
        })
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ },

/***/ "./src/scripts/RCSChatbot.js"
/*!***********************************!*\
  !*** ./src/scripts/RCSChatbot.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


// ── Config ────────────────────────────────────────────────────

const PHONE_DISPLAY = "512-551-3050";
const PHONE_LINK = "tel:+15125513050";
const EMAIL_DISPLAY = "marisa@rcscomplete.com";
const EMAIL_LINK = "mailto:marisa@rcscomplete.com";
const CONTACT_LINK = "/contact-us";
const SERVICES_LINK = "/services";
const ABOUT_LINK = "/about-us";
const LOCATIONS_LINK = "/locations";

// ── Icons ─────────────────────────────────────────────────────

function BotIcon({
  className = ""
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12 2C8.13 2 5 5.13 5 9v2.5c0 .53-.21 1.04-.59 1.41L3 14.5h18l-1.41-1.59A2 2 0 0 1 19 11.5V9c0-3.87-3.13-7-7-7Z",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M9 17.5c.4 1.2 1.5 2 3 2s2.6-.8 3-2",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "9.25",
      cy: "9.75",
      r: "1",
      fill: "currentColor"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "14.75",
      cy: "9.75",
      r: "1",
      fill: "currentColor"
    })]
  });
}
function CloseIcon({
  className = ""
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6 6L18 18M18 6L6 18",
      stroke: "currentColor",
      strokeWidth: "1.9",
      strokeLinecap: "round"
    })
  });
}
function SendIcon({
  className = ""
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 3L10 14M21 3L14 21L10 14L3 10L21 3Z",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
}
function PhoneIcon({
  className = ""
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M21 16.2V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h2.8a2 2 0 0 1 2 1.72l.38 2.66a2 2 0 0 1-.58 1.72l-1.2 1.2a16 16 0 0 0 5.4 5.4l1.2-1.2a2 2 0 0 1 1.72-.58l2.66.38A2 2 0 0 1 21 16.2Z",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
}
function LinkIcon({
  className = ""
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M14 5H19V10M10 14L19 5",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M19 14V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1H10",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
}
function PaintIcon({
  className = ""
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    className: className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M3 3h12v4H3zM5 7v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V7",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M18 8c0-1.5 3-3 3-3s-1.5 2.5-1.5 3a1.5 1.5 0 0 1-3 0c0-.5-.5-1.5-.5-1.5",
      stroke: "currentColor",
      strokeWidth: "1.7",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
}

// ── Bot logic ─────────────────────────────────────────────────

function msg(text, links = []) {
  return {
    id: Date.now() + Math.random(),
    text,
    sender: "bot",
    timestamp: new Date(),
    links
  };
}
function getBotResponse(rawInput) {
  const i = rawInput.toLowerCase();

  // Interior painting
  if (i.includes("interior") || i.includes("unit") || i.includes("drywall finish") || i.includes("smooth wall") || i.includes("mep")) {
    return msg("RCS handles new unit interior production at scale — prep, prime, finish, and punch across the building on schedules our partners can plan around. We coordinate MEP clearances, document finish standards per unit, and manage fire-rated assemblies. Smooth-finish drywall only.", [{
      label: "Interior Painting",
      href: "/services/multifamily-interior-painting"
    }, {
      label: "Request a Bid",
      href: CONTACT_LINK
    }]);
  }

  // Exterior painting
  if (i.includes("exterior") || i.includes("stucco") || i.includes("fiber cement") || i.includes("facade") || i.includes("envelope") || i.includes("boom lift") || i.includes("mid-rise")) {
    return msg("Our exterior painting crews are boom lift certified and specialize in weather-resistant systems built for Texas and South Central climates. We apply across stucco, fiber cement, trim, and architectural metals — with surface prep and repair included. Same-standard execution on mid-rise envelopes.", [{
      label: "Exterior Painting",
      href: "/services/multifamily-exterior-painting"
    }, {
      label: "Request a Bid",
      href: CONTACT_LINK
    }]);
  }

  // Specialty / electrostatic / color consulting
  if (i.includes("specialty") || i.includes("electrostatic") || i.includes("railing") || i.includes("metal") || i.includes("color consult") || i.includes("palette") || i.includes("epoxy") || i.includes("texture")) {
    return msg("RCS provides electrostatic painting for railings, doors, frames, and industrial metal components. We also offer color consulting for developers selecting palettes for new properties — backed by premium commercial-grade product expertise and on-project specification support.", [{
      label: "Specialty Coatings",
      href: "/services/specialty-coatings"
    }, {
      label: "Request a Bid",
      href: CONTACT_LINK
    }]);
  }

  // Project types / scope
  if (i.includes("garden") || i.includes("mid-rise") || i.includes("senior") || i.includes("townhome") || i.includes("mixed-use") || i.includes("project type")) {
    return msg("RCS specializes in multifamily new construction across the full range — garden-style, mid-rise, senior housing, townhomes, and mixed-use. There is no formal unit-count minimum. A 24-unit boutique mid-rise is a strong fit; so is an 800-unit garden-style community.", [{
      label: "Services Overview",
      href: SERVICES_LINK
    }, {
      label: "Request a Bid",
      href: CONTACT_LINK
    }]);
  }

  // Locations / markets / states
  if (i.includes("austin") || i.includes("houston") || i.includes("dallas") || i.includes("san antonio") || i.includes("dfw") || i.includes("oklahoma") || i.includes("louisiana") || i.includes("arkansas") || i.includes("new mexico") || i.includes("texas") || i.includes("state") || i.includes("market") || i.includes("location") || i.includes("area") || i.includes("region")) {
    return msg("RCS maintains active operations across four Texas markets — Austin (HQ), Houston, Dallas-Fort Worth, and San Antonio — plus regional coverage in Oklahoma, Louisiana, Arkansas, and New Mexico. The same execution standard applies regardless of which market your project sits in.", [{
      label: "Locations",
      href: LOCATIONS_LINK
    }, {
      label: "Request a Bid",
      href: CONTACT_LINK
    }]);
  }

  // RFP / bid / quote / timeline
  if (i.includes("rfp") || i.includes("bid") || i.includes("quote") || i.includes("estimate") || i.includes("proposal") || i.includes("scope review") || i.includes("how fast") || i.includes("response time") || i.includes("turnaround")) {
    return msg("On-site walk within 72 hours of RFP receipt. Detailed bid with line-item scope, schedule, manpower plan, and material specifications delivered within five business days. Faster turnarounds available when the project requires it.", [{
      label: "Request a Project Bid",
      href: CONTACT_LINK
    }]);
  }

  // Process / phases / how it works
  if (i.includes("process") || i.includes("phase") || i.includes("how do you") || i.includes("workflow") || i.includes("walkthrough") || i.includes("kickoff") || i.includes("turnover") || i.includes("punch") || i.includes("warranty")) {
    return msg("RCS runs every project in five phases: Bid & Walkthrough (Days 1–7), Pre-Construction Alignment (Days 8–14), Mobilization, Owner-Supervised Production, and Turnover & Warranty. Two-year workmanship warranty standard. Extended terms available by project.", [{
      label: "See Our Process",
      href: "/#how-we-run"
    }, {
      label: "Request a Bid",
      href: CONTACT_LINK
    }]);
  }

  // Owner supervised / accountability
  if (i.includes("owner") || i.includes("supervisor") || i.includes("accountability") || i.includes("who runs") || i.includes("who manages") || i.includes("founder")) {
    return msg("The founder is on-site walking every project — from bid walk to final punch. The same person who shook your hand at the walkthrough is the one walking your punch list. No project is handed off to an unsupervised foreman.", [{
      label: "About RCS",
      href: ABOUT_LINK
    }]);
  }

  // Scale / capacity / simultaneous projects
  if (i.includes("scale") || i.includes("capacity") || i.includes("simultaneous") || i.includes("multiple project") || i.includes("how many") || i.includes("manpower") || i.includes("crew size")) {
    return msg("RCS operates 20+ simultaneous active projects across the service area. 100+ painters mobilized at any given time. Mobilization, scheduling, and manpower allocation are proven systems — not improvised on each job.", [{
      label: "Why Choose RCS",
      href: ABOUT_LINK
    }, {
      label: "Request a Bid",
      href: CONTACT_LINK
    }]);
  }

  // OSHA / insurance / certifications / credentials
  if (i.includes("osha") || i.includes("insur") || i.includes("coi") || i.includes("certified") || i.includes("licensed") || i.includes("duns") || i.includes("hub") || i.includes("mwbe") || i.includes("credential") || i.includes("safety")) {
    return msg("Every field crew member is OSHA 10 certified minimum; all supervisors hold OSHA 30. Boom lift certified. Fully insured — general liability, workers' comp, and auto. COIs delivered within 24 hours of request. DUNS #082349795. Hispanic-owned, HUB Texas eligible, SAM.gov registered.", [{
      label: "Credentials",
      href: "/#credentials"
    }, {
      label: "Request a Bid",
      href: CONTACT_LINK
    }]);
  }

  // Communication / updates / reporting
  if (i.includes("communicat") || i.includes("update") || i.includes("photo") || i.includes("report") || i.includes("daily") || i.includes("progress")) {
    return msg("Daily progress reports during active production. Weekly photo documentation, manpower logs, and schedule variance reports sent to the project contact before you ask. Issues are escalated immediately — not held until they affect the schedule.", [{
      label: "About RCS",
      href: ABOUT_LINK
    }]);
  }

  // GC vs developer / who works with
  if (i.includes("general contractor") || i.includes("gc") || i.includes("developer") || i.includes("owner") || i.includes("asset manager") || i.includes("direct contract") || i.includes("subcontract")) {
    return msg("Both. Roughly half of RCS's work is as a painting subcontractor under a general contractor; the other half is direct contract with developers, owners, and asset managers. We adjust our communication and reporting structure to fit your project delivery model.", [{
      label: "Request a Bid",
      href: CONTACT_LINK
    }]);
  }

  // Contact / call / email
  if (i.includes("contact") || i.includes("call") || i.includes("email") || i.includes("reach") || i.includes("phone") || i.includes("talk")) {
    return msg("You can reach RCS directly by phone or through the contact form. All project inquiries receive a direct response within one business day — no auto-replies.", [{
      label: PHONE_DISPLAY,
      href: PHONE_LINK
    }, {
      label: "Contact Us",
      href: CONTACT_LINK
    }]);
  }

  // Hispanic owned / HUB / MWBE
  if (i.includes("hispanic") || i.includes("minority") || i.includes("hub") || i.includes("mwbe") || i.includes("diversity") || i.includes("inclusion")) {
    return msg("RCS Complete Painting is a Hispanic-owned business with DUNS #082349795. Eligible for HUB Texas certification and federal contracting through SAM.gov. Relevant for MWBE inclusion goals on public and institutional projects.", [{
      label: "Credentials",
      href: "/#credentials"
    }, {
      label: "Contact Us",
      href: CONTACT_LINK
    }]);
  }

  // Default
  return msg("I can help with interior painting, exterior painting, specialty coatings, our service markets across Texas and the South Central region, credentials, project process, or requesting a bid.", [{
    label: "Request a Project Bid",
    href: CONTACT_LINK
  }, {
    label: "Call Us",
    href: PHONE_LINK
  }]);
}

// ── Component ─────────────────────────────────────────────────

function RCSChatbot() {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [inputMessage, setInputMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isTyping, setIsTyping] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    id: 1,
    text: "Hi — I'm the RCS Complete Painting assistant. I can help with our services, markets across Texas and the South Central region, credentials, and requesting a project bid.",
    sender: "bot",
    timestamp: new Date(),
    links: [{
      label: "Request a Project Bid",
      href: CONTACT_LINK
    }, {
      label: "Call Us",
      href: PHONE_LINK
    }]
  }]);
  const endRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const quickActions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [{
    text: "Interior Painting",
    icon: "🏢"
  }, {
    text: "Exterior Painting",
    icon: "🏗️"
  }, {
    text: "Specialty Coatings",
    icon: "⚡"
  }, {
    text: "Texas Markets",
    icon: "📍"
  }, {
    text: "OSHA & Credentials",
    icon: "🛡️"
  }, {
    text: "Request a bid",
    icon: "📋"
  }], []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, isTyping]);
  function handleSend(e) {
    e?.preventDefault?.();
    if (!inputMessage.trim()) return;
    const text = inputMessage.trim();
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      sender: "user",
      timestamp: new Date()
    }]);
    setInputMessage("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, getBotResponse(text)]);
      setIsTyping(false);
    }, 650);
  }

  // Brand colors
  const RED = "#CC0000";
  const RED_DARK = "#A80000";
  const INK = "#1A1A1A";
  const BG = "#F6F6F4";
  const WHITE = "#FFFFFF";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "fixed bottom-4 right-4 z-[9999] sm:bottom-5 sm:right-5",
    children: [isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "mb-3 flex flex-col overflow-hidden",
      style: {
        width: "calc(100vw - 1.25rem)",
        maxWidth: "22rem",
        height: "33rem",
        borderRadius: "24px",
        boxShadow: "0 22px 60px rgba(0,0,0,0.16)",
        border: "1px solid rgba(0,0,0,0.09)",
        background: BG
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "relative overflow-hidden px-4 py-3 text-white",
        style: {
          background: `linear-gradient(135deg, ${INK} 0%, #3a0000 60%, ${RED} 130%)`,
          borderBottom: "1px solid rgba(255,255,255,0.08)"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "absolute inset-0 opacity-[0.05]",
          style: {
            backgroundImage: "linear-gradient(45deg, rgba(255,255,255,.5) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.5) 50%, rgba(255,255,255,.5) 75%, transparent 75%)",
            backgroundSize: "16px 16px",
            pointerEvents: "none"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "relative flex items-start justify-between gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0",
              style: {
                background: "rgba(204,0,0,0.25)",
                border: "1px solid rgba(204,0,0,0.5)"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PaintIcon, {
                className: "h-5 w-5"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                className: "text-[10px] font-black uppercase tracking-[0.2em]",
                style: {
                  color: "rgba(255,255,255,.55)"
                },
                children: "Schedule \xB7 Finish \xB7 Accountability"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
                className: "mt-0.5 text-[0.9rem] font-black tracking-[-0.01em]",
                children: "RCS Complete Painting"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "mt-0.5 flex items-center gap-1.5",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "h-1.5 w-1.5 rounded-full",
                  style: {
                    background: "#4ade80"
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  className: "text-[10px] font-semibold uppercase tracking-[0.14em]",
                  style: {
                    color: "rgba(255,255,255,.6)"
                  },
                  children: "Online \xB7 responds in <1 day"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "button",
            onClick: () => setIsOpen(false),
            className: "inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition",
            style: {
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.15)"
            },
            onMouseEnter: e => {
              e.currentTarget.style.background = WHITE;
              e.currentTarget.style.color = INK;
            },
            onMouseLeave: e => {
              e.currentTarget.style.background = "rgba(255,255,255,.1)";
              e.currentTarget.style.color = WHITE;
            },
            "aria-label": "Close chat",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CloseIcon, {
              className: "h-4 w-4"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "flex-1 overflow-y-auto px-3 py-3",
        style: {
          background: BG
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "space-y-3",
          children: [messages.map(message => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: `flex ${message.sender === "user" ? "justify-end" : "justify-start"}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "max-w-[88%] px-3.5 py-2.5 text-[0.875rem] leading-6",
              style: message.sender === "user" ? {
                background: INK,
                color: WHITE,
                borderRadius: "18px 18px 4px 18px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
              } : {
                background: WHITE,
                color: INK,
                borderRadius: "18px 18px 18px 4px",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                style: {
                  margin: 0
                },
                children: message.text
              }), message.links?.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "mt-2.5 flex flex-wrap gap-1.5",
                children: message.links.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
                  href: link.href,
                  className: "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-bold transition",
                  style: {
                    background: BG,
                    border: "1px solid rgba(0,0,0,0.10)",
                    color: RED,
                    textDecoration: "none"
                  },
                  onMouseEnter: e => {
                    e.currentTarget.style.borderColor = RED;
                    e.currentTarget.style.background = "#fff0f0";
                  },
                  onMouseLeave: e => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.10)";
                    e.currentTarget.style.background = BG;
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LinkIcon, {
                    className: "h-3 w-3"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    children: link.label
                  })]
                }, `${message.id}-${link.href}`))
              })]
            })
          }, message.id)), isTyping && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "flex justify-start",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "px-4 py-3",
              style: {
                background: WHITE,
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "18px 18px 18px 4px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "flex gap-1.5",
                children: [0, 200, 400].map((delay, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "h-2 w-2 rounded-full animate-bounce",
                  style: {
                    background: idx === 0 ? INK : RED,
                    animationDelay: `${delay}ms`
                  }
                }, idx))
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            ref: endRef
          })]
        })
      }), messages.length === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "border-t px-3 py-2.5",
        style: {
          borderColor: "rgba(0,0,0,0.07)",
          background: WHITE
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "mb-2 text-[0.65rem] font-black uppercase tracking-[0.14em]",
          style: {
            color: RED
          },
          children: "Quick topics"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "flex flex-wrap gap-1.5",
          children: quickActions.map(action => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
            type: "button",
            onClick: () => setInputMessage(action.text),
            className: "rounded-full px-2.5 py-1.5 text-[11px] font-bold transition",
            style: {
              background: BG,
              border: "1px solid rgba(0,0,0,0.09)",
              color: INK
            },
            onMouseEnter: e => {
              e.currentTarget.style.borderColor = RED;
              e.currentTarget.style.background = "#fff0f0";
              e.currentTarget.style.color = RED;
            },
            onMouseLeave: e => {
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.09)";
              e.currentTarget.style.background = BG;
              e.currentTarget.style.color = INK;
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "mr-1",
              children: action.icon
            }), action.text]
          }, action.text))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "border-t p-3",
        style: {
          borderColor: "rgba(0,0,0,0.07)",
          background: WHITE
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
          onSubmit: handleSend,
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            type: "text",
            value: inputMessage,
            onChange: e => setInputMessage(e.target.value),
            placeholder: "Ask about services, markets, bids\u2026",
            className: "min-w-0 flex-1 rounded-full px-4 py-2.5 text-sm outline-none transition",
            style: {
              background: BG,
              border: "1px solid rgba(0,0,0,0.09)",
              color: INK,
              fontFamily: "'DM Sans', sans-serif"
            },
            onFocus: e => {
              e.currentTarget.style.borderColor = RED;
              e.currentTarget.style.background = WHITE;
            },
            onBlur: e => {
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.09)";
              e.currentTarget.style.background = BG;
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "submit",
            disabled: !inputMessage.trim(),
            className: "inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-white transition",
            style: {
              background: `linear-gradient(135deg, ${RED_DARK}, ${RED})`,
              boxShadow: "0 6px 18px rgba(204,0,0,0.30)",
              opacity: inputMessage.trim() ? 1 : 0.5
            },
            onMouseEnter: e => {
              if (inputMessage.trim()) e.currentTarget.style.opacity = "0.85";
            },
            onMouseLeave: e => {
              e.currentTarget.style.opacity = inputMessage.trim() ? "1" : "0.5";
            },
            "aria-label": "Send message",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SendIcon, {
              className: "h-4 w-4"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "mt-2.5 flex flex-wrap items-center gap-3 text-[11px] font-semibold",
          style: {
            color: "rgba(0,0,0,0.40)"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
            href: PHONE_LINK,
            className: "inline-flex items-center gap-1.5 transition",
            style: {
              textDecoration: "none",
              color: "rgba(0,0,0,0.40)"
            },
            onMouseEnter: e => e.currentTarget.style.color = RED,
            onMouseLeave: e => e.currentTarget.style.color = "rgba(0,0,0,0.40)",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PhoneIcon, {
              className: "h-3.5 w-3.5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: PHONE_DISPLAY
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: EMAIL_LINK,
            className: "truncate transition",
            style: {
              textDecoration: "none",
              color: "rgba(0,0,0,0.40)"
            },
            onMouseEnter: e => e.currentTarget.style.color = RED,
            onMouseLeave: e => e.currentTarget.style.color = "rgba(0,0,0,0.40)",
            children: EMAIL_DISPLAY
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
      type: "button",
      onClick: () => setIsOpen(prev => !prev),
      className: "relative flex h-14 w-14 items-center justify-center rounded-full text-white transition-all duration-300",
      style: {
        background: isOpen ? INK : `linear-gradient(135deg, ${INK} 0%, ${RED} 100%)`,
        boxShadow: "0 16px 40px rgba(204,0,0,0.30)"
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = "scale(1.07)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = "scale(1)";
      },
      "aria-label": isOpen ? "Close chat" : "Open chat",
      children: [!isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
        className: "absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
          style: {
            background: "#4ade80"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "relative inline-flex h-3.5 w-3.5 rounded-full",
          style: {
            background: "#4ade80"
          }
        })]
      }), isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CloseIcon, {
        className: "h-5 w-5"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BotIcon, {
        className: "h-6 w-6"
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RCSChatbot);

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom/client"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Navbar */ "./src/scripts/Navbar.js");
/* harmony import */ var _scripts_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/Footer */ "./src/scripts/Footer.js");
/* harmony import */ var _scripts_HeroBidForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/HeroBidForm */ "./src/scripts/HeroBidForm.js");
/* harmony import */ var _scripts_RCSChatbot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/RCSChatbot */ "./src/scripts/RCSChatbot.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







// ── Navbar ──────────────────────────────────────────────────────────────────

if (document.querySelector("#render-navbar-here")) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(document.querySelector("#render-navbar-here"));
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    logoUrl: window.rcsTheme?.logoUrl
  }));
}

// ── Footer ──────────────────────────────────────────────────────────────────
if (document.querySelector("#render-footer-here")) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(document.querySelector("#render-footer-here"));
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    logoUrl: window.rcsTheme?.logoUrl
  }));
}

// ── Hero Bid Form ────────────────────────────────────────────────────────────
if (document.querySelector("#render-hero-form-here")) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(document.querySelector("#render-hero-form-here"));
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_HeroBidForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}));
}

// ── Chatbot (global — disponible en todas las páginas) ───────────────────────
if (document.querySelector("#render-chatbot-here")) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(document.querySelector("#render-chatbot-here"));
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_scripts_RCSChatbot__WEBPACK_IMPORTED_MODULE_5__["default"], {}));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map