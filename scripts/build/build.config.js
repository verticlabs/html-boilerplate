({
	baseUrl: '../',
	name: 'main',
	optimize: 'uglify',
	paths: {
		'jquery': 'libraries/jquery',
		'modernizr': 'libraries/modernizr',
		'core': 'framework/core'
	},
	out: '../main-built.js',
	preserveLicenseComments: false
})