

    function initMap() {
    var mapCenter = {lat: 49.302247, lng: 20.071730},
        infowindowContent = jQuery('.info-window-content').html(),
        coworking = new google.maps.Map(document.getElementById('location-block'),
            {
               center: mapCenter,
               zoom: 15
            }
            ),
            marker = new google.maps.Marker(
                {
                position: mapCenter,
                map: coworking
                }
            ),

        infowindow = new google.maps.InfoWindow({
               content: infowindowContent
           });
           marker.addListener('click', function() { //в api google maps слушатель событий addListener
               infowindow.open(coworking, marker);
           });
}

