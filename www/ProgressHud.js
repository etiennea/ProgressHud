/**
 * A plugin to enable iOS ProgressBar on phonegap 3.0
 *
 * Copyright (c) Matt Kane 2011
 * Copyright (c) Guillaume Charhon 2012
 * Copyright (c) Jean-Christophe Hoelt 2013
 * Copyright (c) Etienne Adriaenssen 2013
 */

var PHexec = function (methodName, options, success, error) {
    cordova.exec(success, error, "ProgressHud", methodName, options);
};

var ProgressHud = function () {
    this.options = {};
};

ProgressHud.prototype.show = function(options, callback) {
	if(!options) options = {};
	var scope = options.scope || null;
	delete options.scope;

	var service = 'ProgressHud',
		action = 'show',
		callbackId = service + (cordova.callbackId + 1);

	var config = {
		mode: options.mode || 'indeterminate',
		labelText: options.labelText || 'Loading...',
		detailsLabelText: options.detailsLabelText || '',
		progress: options.progress || 0
	};

	var _callback = function(result) {
		if(typeof callback == 'function') callback.apply(scope, arguments);
	};

	return exec(action, [config], _callback, _callback);
};

ProgressHud.prototype.set = function(options, callback) {
	if(!options) options = {};
	var scope = options.scope || null;
	delete options.scope;

	var service = 'ProgressHud',
		action = 'set',
		callbackId = service + (cordova.callbackId + 1);

	var _callback = function(result) {
		if(typeof callback == 'function') callback.apply(scope, arguments);
	};

	return exec(action, [options], _callback, _callback);

};

ProgressHud.prototype.hide = function(options, callback) {
	if(!options) options = {};
	var scope = options.scope || null;
	delete options.scope;

	var service = 'ProgressHud',
		action = 'hide',
		callbackId = service + (cordova.callbackId + 1);

	var config = {};

	var _callback = function(result) {
		if(typeof callback == 'function') callback.apply(scope, arguments);
	};

	return PHexec(action, [config], _callback, _callback);

};

module.exports = new ProgressHud();
