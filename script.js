//L is a object getting from the CDN  : { map is the property  }
// setVeiw([lati,longi],zoom-level)

const map = L.map('map').setView([51.505, -0.09], 13);

const tileurl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'

// for no copyright issue : 
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, coded by Supratick Mondal'

// i need to add it to the map :
const Tilelayer = L.tileLayer(tileurl, {
    attribution:attribution,
    
})

Tilelayer.addTo(map);

// Added the map in our file .

// Adding a circle on the map : 
const circle =L.circle([51.505, -0.09], {
    radius: 200 ,
     color : "red",
     interactive : false
 })

circle.addTo(map);

const bt = [
   [
    [25.7617, -80.1918],
    [32.3078, -64.7505], 
    [18.4655, -66.1057]
   ]
]
const btpolygon = L.polygon(bt,{
    color:'red'
})
btpolygon.addTo(map)

// polyLine can be used to show the routes between 2 places 

//marker use karsakte hoo to indicate a certain [latitude,longitude]
// L.marker([22.5726, 88.3639]).addTo(map);
// L.marker([22.5726, 88.3639]);

// kolkata.addTo(map)

map.on('click', function(ev) {
    // alert(ev.latlng); // ev is an event object (MouseEvent in this case)
    var t = ev.latlng
    // console.log(t);
    // console.log(t.lat)
L.marker([t.lat, t.lng]).addTo(map);

});

// we are using the mouse and marking the places .