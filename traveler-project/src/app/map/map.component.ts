import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  ngOnInit(): void {
    //load the map in the browseer

    let loader = new Loader({
      apiKey:'AIzaSyBcisNaYJY8S3l2GF1l3q92aUzUlxRFHc0'
    });

    loader.load().then(()=>{
      console.log("Loaded map!!!!");

      new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6,
        streetViewControl: false,
      });
    })
  }
}
