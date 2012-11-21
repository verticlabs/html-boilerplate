/**
* Application cache monitor
*
* Application cache monitor
*
* @section module
* @author ldeleuran
*/
define(['jquery', 'modernizr', 'framework/core'], function ($, Modernizr, core) {
	var AppCacheMonitor = function () {
		return this.construct.apply(this, arguments);
	};
	AppCacheMonitor.prototype = (function () {
		var 
		bindEventLogs, logEvent, setupJQPrefiltering, // Private functions
		$cache, applicationCache, cacheStatusValues, hasCache, // Private vars
		construct; // Public funtions
		
		// Variables
		hasCache = Modernizr.applicationcache;
		applicationCache = hasCache ? window.applicationCache : false;		
		$cache = $(applicationCache);
		cacheStatusValues = [
			'uncached',
			'idle',
			'checking',
			'downloading',
			'updateready',
			'obsolete'
		];
		
		// Functions

		/**		
		* bindEventLogs()
		* Binds basic logging for all relevant application cache events
		* 
		* @return Boolean success
		**/
		bindEventLogs = function () {
			$cache
				.on('cached', logEvent)
				.on('checking', logEvent)
				.on('downloading', logEvent)
				.on('error', logEvent)
				.on('noupdate', logEvent)
				.on('obsolete', logEvent)
				.on('progress', logEvent)
				.on('updateready', logEvent);

			return true;
		};
		/**		
		* construct()
		* Class constructor
		* 
		* @param Object with name/value pairs of events and functions for event listening
		* @param Boolean whether or not to output basic event logs. Default: true.
		* @param Boolean whether or not to set jQuery Ajax prefiltering. Default: true.
		* @return instance
		**/
		construct = function (events, logging, prefiltering) {
			var scope = this;

			if (typeof events === 'object') {
				$.each(events, function (key, value) {
					if (typeof key === 'string' && typeof value === 'function') {
						$cache.on(key, value);
					}
				});
			}
						
			if (logging !== false) {
				bindEventLogs.apply(scope);
			}

			if (prefiltering !== false) {
				setupJQPrefiltering.apply(scope);
			}

			return this;
		};
		/**		
		* logEvent()
		* Basic event information logger
		* 
		* @return Boolean success
		**/
		logEvent = function (event) {
			var online, status, type, message;
			online = (navigator.onLine) ? 'yes' : 'no';
			status = cacheStatusValues[applicationCache.status];
			type = event.type;
			message = '**AppCache** online: ' + online;
			message += ', event: ' + type;
			message += ', status: ' + status;
			if (type === 'error' && navigator.onLine) {
				message += ' (prolly a syntax error in manifest)';
			}
			core.log.write(message);
			return message;
		};
		/**		
		* setupJQPrefiltering()
		* Sets up jQuery prefiltering. See 'Using Application Cache' in jQuery mobile docs (http://jquerymobile.com/test/docs/pages/page-navmodel.html).
		**/
		setupJQPrefiltering = function () {
			if (hasCache) {
				$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
					if (applicationCache && applicationCache.status !== applicationCache.UNCACHED && applicationCache.status !== applicationCache.OBSOLETE) {
						options.isLocal = true;
					}
				});
			}
		};

		return {
			construct: construct
		};
	} ());

	return AppCacheMonitor;
});
