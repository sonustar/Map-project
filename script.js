//L is a object getting from the CDN  : { map is the property  }
// setVeiw([lati,longi],zoom-level)

const map = L.map('map').setView([51.505, -0.09], 13);

const tileurl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

// for no copyright issue : 
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, coded by Supratick Mondal'

// i need to add it to the map :
const Tilelayer = L.tileLayer(tileurl, {
    attribution:attribution
})

Tilelayer.addTo(map);

// Added the map in our file .