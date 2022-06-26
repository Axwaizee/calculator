
var div = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        div.innerHTML = "The Browser Does not Support Geolocation";
    }
    document.getElementsByTagName('button')[0].style.display = "none"
}

function showPosition(position) {
    div.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    if (error.PERMISSION_DENIED) {
        div.innerHTML = "The User have denied the request for Geolocation.";
    }
}

