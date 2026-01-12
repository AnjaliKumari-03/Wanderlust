mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12", // optional but recommended
  center: listing.geometry.coordinates,
  zoom: 9
});

// 🔴 custom solid marker element
const markerEl = document.createElement("div");
markerEl.className = "map-solid-marker";

new mapboxgl.Marker(markerEl)
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
    )
  )
  .addTo(map);
