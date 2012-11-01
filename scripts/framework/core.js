/**
* Vertic core - Vertic framework
*
* Core container
*
* @section Framework
* @author ldeleuran
* @modifiedby echristensen
*/
define(['jquery', 'tools/log', 'tools/error'], function($, log, error){
	var core = {};
	core.log = new log.Class();
	core.error = new error.Class();
	
	return core;
});