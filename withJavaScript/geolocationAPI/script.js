const display =document.getElementById('demo');
const x =document.getElementById('temp');

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLocation,showError);
        // can use watchPosition(showLocation,showError);
    } else {
        display.innerHTML="GeoLoactionAPI isn't available for your browser";
    }
}
function showError(error) {
    console.log(error);
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }
function showLocation(position){
    display.innerHTML =  position.coords.latitude + "," + position.coords.longitude;


}