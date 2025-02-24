export var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(37.378760, 126.662809),
        level: 3
    }; 

export var map = new kakao.maps.Map(mapContainer, mapOption);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude,
            lon = position.coords.longitude;
        var locPosition = new kakao.maps.LatLng(lat, lon),
            message = '<div style="padding:5px;"> 내 위치 </div>';
        displayMarker(locPosition, message);
            
      });
    
}

function displayMarker(locPosition, message) {

    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    
    var iwContent = message,
        iwRemoveable = true;

    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    infowindow.open(map, marker);
    
    map.setCenter(locPosition);      
}    

function SButton(suny){
	if(suny===true){
		map.setCenter(new kakao.maps.LatLng(37.378760, 126.662809));
        map.setLevel(3);
	}
}

window.SButton = SButton;