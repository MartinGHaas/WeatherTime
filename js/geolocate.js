const options = {
    enableHighAccuracy: true
}

let lat;
let lon;

function success(position) {
    const cor = position.coords;
    lat = cor.latitude;
    lon = cor.longitude;

    getLatAPI(lat, lon)
}

function error(error) {
    console.warn(`ERROR(${error.code}): ${error.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);