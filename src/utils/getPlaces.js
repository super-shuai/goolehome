const base = { lat: 43.653226, lng: -79.3831484 };

export default function getMarkers() {
  const cnt = 10;
  const markers = [];
  for (let i = 0; i < cnt; i++) {
    markers.push({
      id: i,
      title: "marker: " + i,
      lat: base.lat + 0.04 * i,
      lng: base.lng + 0.04 * i
    });
  }
  return markers;
}
