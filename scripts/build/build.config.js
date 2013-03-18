({
	baseUrl: '../',
	name: 'main',
	optimize: 'uglify',
	paths: {
		'jquery': 'libraries/jquery-1.9.1',
		'modernizr': 'libraries/modernizr-2.6.2',
		'core': 'framework/core'
	},
	out: '../main-built.js',
	preserveLicenseComments: false
})