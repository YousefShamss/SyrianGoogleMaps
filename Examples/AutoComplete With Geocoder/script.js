(function() {
	window.onload = function() {
		var defaultBounds,mapOptions,mainMap,autocompleteOptions;
		defaultBounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(33.597244,36.446629),
			new google.maps.LatLng(33.39626,36.044941)
			);
		autocompleteOptions = {
			bounds : defaultBounds
		}
		mapOptions = {
			center : new google.maps.LatLng(33.5000,36.3000),
			zoom:9,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		}
		mainMap = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
		var input = document.getElementById("autocomplete");
		map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
		var = new google.maps.places.Autocomplete(input,autocompleteOptions);
	}
})();