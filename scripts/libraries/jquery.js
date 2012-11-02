/**
* jQuery
*
* jQuery wrapper for AMD an non-polluting the global namespace
*
* @section Library
* @author echristensen
*/
define(['libraries/jquery-1.7.2-dev'], function() {
	return jQuery.noConflict(true);
});