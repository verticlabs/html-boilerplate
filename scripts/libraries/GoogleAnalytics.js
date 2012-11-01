/**
* Google Analytics
*
* Google Analytics
*
* @section Library
* @author orud
*/
try {
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', trackingCode]);
	_gaq.push(['_trackPageview']);

	(function () {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();

} catch (err) { }
function trackEvent(category, action, label, amount) {
	try {
		_gaq.push(['_trackEvent', category, action, label, amount]);
	} catch (err) { }
}
function trackPageview(url) {
	try {
		_gaq.push(['_trackPageview', url]);
	} catch (err) { }
}