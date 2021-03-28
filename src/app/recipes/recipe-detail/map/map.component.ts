import { environment } from "../../../../environments/environment";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style =
    "https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh";
  lat = 45.35;
  lng = -75.76;
  constructor() {}
  ngOnInit() {
    // mapboxgl.accessToken = environment.accessToken;
    this.map = new mapboxgl.Map({
      container: "map",
      style: this.style,
      zoom: 10,
      center: [this.lng, this.lat],
      accessToken: environment.accessToken
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
    this.createMarker(this.lng, this.lat);
  }

  createMarker(lng: number, lat: number) {
    const marker = new mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([this.lng, this.lat])
      .addTo(this.map);

    marker.on("drag", () => {
      console.log(marker.get);
    });
  }
}
