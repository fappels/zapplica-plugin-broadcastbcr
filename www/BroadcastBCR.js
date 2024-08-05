/*
   Copyright 2017 Francis Appels - http://www.z-application.com/

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/**
 * This class provides barcode reader using generic BroadcastReceiver
 */

var exec = require('cordova/exec');

var BroadcastBCR = function() {};

/**
 * Constants for checking BroadcastReceiver BCR states
 */

BroadcastBCR.prototype.STATE_NONE = 0;       // we're doing nothing
BroadcastBCR.prototype.STATE_READY = 1; //reading BCR reader
BroadcastBCR.prototype.STATE_READING = 2; //reading BCR reader
BroadcastBCR.prototype.STATE_READ = 3; ///read received BCR reader
BroadcastBCR.prototype.STATE_ERROR = 4; // error
BroadcastBCR.prototype.STATE_DESTROYED = 5; // BCR reader destroyed


/**
 * int BroadcastReceiver bcr
 *
 * @param successCallback function to be called when plugin is init
 * @param errorCallback well never be called
 */
BroadcastBCR.prototype.init = function(successCallback,failureCallback,broadcastName,dataKey) {
	cordova.exec(successCallback, failureCallback, 'BroadcastBCR', 'init', [broadcastName, dataKey]);
};

/**
 * destroy BroadcastReceiver bcr
 * 
 * @param successCallback function to be called when plugin is destroyed
 * @param errorCallback well never be called
 */
BroadcastBCR.prototype.destroy = function(successCallback,failureCallback) {
	cordova.exec(successCallback, failureCallback, 'BroadcastBCR', 'destroy', []);	
};

/**
 * Check BroadcastReceiver bcr current state
 * 
 * @param successCallback(object) returns json object containing state, property state (int)
 * @param errorCallback function to be called when problem fetching state.
 *  
 */
BroadcastBCR.prototype.getState = function(successCallback,failureCallback) {
		 cordova.exec(successCallback, failureCallback, 'BroadcastBCR', 'getState', []);
 };

/**
 * Read BCR
 * 
 * @param successCallback(data) asynchronous function to be called each time reading was successful.
 * 		returns ASCII string with received data 
 * @param errorCallback asynchronous function to be called when there was a problem while reading
 */
BroadcastBCR.prototype.read = function(successCallback,failureCallback) {
	 cordova.exec(successCallback, failureCallback, 'BroadcastBCR', 'read', []);
};

var broadcastBCR = new BroadcastBCR();
module.exports = broadcastBCR;
