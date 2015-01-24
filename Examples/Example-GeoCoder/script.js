(function() {
	var map,geocoder,marker,infoWindow;
	window.onload=function() {
		var mapOption = {
			center: new google.maps.LatLng(33,37),
			zoom:10,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById('map'),mapOption);
		var myForm = document.getElementById('addressForm');
		myForm.onsubmit = function() {
		var address = document.getElementById("address").value;
		getCoordinantes(address);
		return false;
		}
	}
	function getCoordinantes(address) {
		if (!geocoder){
			geocoder = new google.maps.Geocoder();
		}
		var geocoderRequest={
			address:address
		}
		geocoder.geocode(geocoderRequest , function(results,status){
			if(status==google.maps.GeocoderStatus.OK){
				map.setCenter(results[0].geometry.location);
				if(!marker){
					marker = new google.maps.Marker({
						map:map
					});
				}
				marker.setPosition(results[0].geometry.location);
				var mapCenter,markerPosition;
				mapCenter=map.getCenter();
				markerPosition=marker.getPosition();
				var distance = google.maps.geometry.spherical.computeDistanceBetween( mapCenter , markerPosition );
				console.log(distance);
			}
		});
	}
})();