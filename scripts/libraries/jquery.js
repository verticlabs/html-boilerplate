/**
* jQuery
*
* jQuery wrapper for AMD an non-polluting the global namespace
*
* @section Library
* @author echristensen
*/
define(['libraries/jquery-1.9.1'], function() {
	return jQuery.noConflict(true);
});