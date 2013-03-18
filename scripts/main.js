/*
 * Vertic JS - Site functional wrapper
 * http://labs.vertic.com
 *
 * Copyright 2012, Vertic A/S
 *
 */

require.config({
	paths: {
		'jquery': 'libraries/jquery',
		'modernizr': 'libraries/modernizr',
		'core': 'framework/core'
	}
});

require(['jquery', 'modernizr', 'core'], function($, Modernizr, core) {
	"use strict";

	// DOM ready
	$(function () {
		core.log.write('DOM is ready!');
		core.error.write(core, 'Core dump', 'Reactor overheating', false);

		// expose core to global scope as vertic
		window.vertic = core;
	});

});
