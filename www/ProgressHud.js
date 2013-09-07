/**
 * A plugin to enable iOS ProgressBar on phonegap 3.0
 *
 * Copyright (c) Matt Kane 2011
 * Copyright (c) Guillaume Charhon 2012
 * Copyright (c) Jean-Christophe Hoelt 2013
 * Copyright (c) Etienne Adriaenssen 2013
 */
 var exec = require('cordova/exec');

 function ProgressHud() {}

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

 	return cordova.exec(_callback, _callback, service, action, [config]);

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

 	return cordova.exec(_callback, _callback, service, action, [options]);

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

 	return cordova.exec(_callback, _callback, service, action, [config]);

 };

 module.exports = new ProgressHud();