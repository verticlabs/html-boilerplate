/// <reference path="libraries/modernizr-2.6.1-dev.js" />
/// <reference path="libraries/jquery-1.7.2-dev.js" />
/*
 * Vertic JS - Site functional wrapper
 * http://labs.vertic.com
 *
 * Copyright 2012, Vertic A/S
 *
 * Date: Tue Jan 31 12:00:00 2012 +0200
 * Modified: Tue Jun 19 16:00:00 2012 +0200
 */
require.config({
	paths: {
		'jquery': 'libraries/jquery',
		'modernizr': 'libraries/modernizr'
	}
});
require(['jquery', 'modernizr', 'framework/core'], function($, Modernizr, core) {
	// DOM ready
	$(document).on('ready', function () {
		core.log.write('DOM is ready!');
		core.error.write(core, 'Core dump', 'Reactor overheating', false);

		// expose core to global scope as vertic
		core.$ = $;
		window.vertic = core;
	});
	
});
