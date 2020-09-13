

var map = L.map('map', {
  scrollWheelZoom: false
}).setView([51.473361, 11.965619], 100);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([51.473361, 11.965619]).addTo(map);
    //.bindPopup('Georg-Cantor-Gymnasium<br>Torstraße 13<br>06110 Halle(Saale)<br><b><a href="https://maps.openrouteservice.org/directions?n1=51.473292&n2=11.965606&n3=18&a=null,null,51.473292,11.965606&b=0&c=0&k1=de&k2=km">Route</a>')
    //.openPopup();

function onMarkerClick(e) {
    marker.bindPopup('Georg-Cantor-Gymnasium<br>Torstraße 13<br>06110 Halle(Saale)<br><b><a href="https://maps.openrouteservice.org/directions?n1=51.473292&n2=11.965606&n3=18&a=null,null,51.473292,11.965606&b=0&c=0&k1=de&k2=km">Route</a>').openPopup();
}

map.on('click', onMarkerClick);
