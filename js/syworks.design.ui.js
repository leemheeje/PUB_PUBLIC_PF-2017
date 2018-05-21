;
(function($) {
	$.fn.extend({
		"cmmDataParse": function(url, callback) {
			var $this = $(this);
			$.getJSON(url, function(data) {
				if (typeof callback === "function") {
					callback(data);
				}
			}).fail(function() {
				console.log('dataParseError');
			});
			return $this;
		},
	});
})(jQuery);