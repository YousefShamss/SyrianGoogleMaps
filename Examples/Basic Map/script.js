(function(){
window.onload = function() {
// Creating a new map
var options = {
zoom: 3,
center: new google.maps.LatLng(37.09, -95.71),
mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('map'), options);
}
})();