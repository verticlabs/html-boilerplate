/*
 * Vertic JS - Site functional wrapper
 * http://labs.vertic.com
 *
 * Copyright 2012, Vertic A/S
 *
 */

require.config({
	paths: {
		'jquery': 'libraries/jquery-1.9.1',
		'modernizr': 'libraries/modernizr-2.6.2'
	}
});

require(['jquery', 'modernizr', 'framework/core'], function($, Modernizr, core) {
	"use strict";

	// DOM ready
	$(function () {
		core.log.write('DOM is ready!');
		core.error.write(core, 'Core dump', 'Reactor overheating', false);

		// expose core to global scope as vertic
		window.vertic = core;
	});
	
});
