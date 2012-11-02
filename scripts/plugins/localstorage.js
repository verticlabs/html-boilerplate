/**
* Local storage polyfill
*
* Local storage polyfill
*
* @author ldeleuran
**/
define(['modernizr', 'framework/core', 'libraries/JSON'], function (Modernizr, core) {
	var localStore, namespace;

	// Detect if local storage i available
	if (!Modernizr.localstorage) {
		window.localStorage = {
			_data: {},
			setItem: function (id, val) { return this._data[id] = String(val); },
			getItem: function (id) { return this._data.hasOwnProperty(id) ? this._data[id] : undefined; },
			removeItem: function (id) { return delete this._data[id]; },
			clear: function () { return this._data = {}; }
		};
		core.error.write(Modernizr.localstorage, 'localStorage error', 'No localStorage available, all memory will be temporary (stale).');
	}

	// Set up namespace and save function
	namespace = 'lundbeckvorioxetineeventapp';
	if (window.location.href.indexOf('localhost') > -1) { // TODO: Remove this piece of cachebusting crap
		var dateNow = new Date();
		namespace += dateNow.getFullYear().toString() + (dateNow.getMonth() + 1).toString() + dateNow.getDate().toString() + dateNow.getHours().toString();
	}
	localStore = function (id, val) {
		var data = localStorage.getItem(namespace), obj = {};

		if (typeof data !== "undefined" && data !== null) {
			obj = JSON.parse(data);
		}

		if (typeof id !== "undefined" && id !== null) {
			if (typeof val !== "undefined" && val !== null) {
				obj[id] = val;
				localStorage.setItem(namespace, JSON.stringify(obj));
			}
			return obj[id];
		}
		return obj;
	};

	return { localStore: localStore };
});