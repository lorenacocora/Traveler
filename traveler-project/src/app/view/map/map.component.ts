import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit{

  ngOnInit(): void{

    this.getCoords();

  }


  getCoords(){

    //get current location of user
    navigator.geolocation.getCurrentPosition((position)=>{

      //load the map in the browser
      this.loadMap(position.coords.latitude, position.coords.longitude)
    })
  }

  loadMap(user_lat:number,user_lng:number): void {

    let loader = new Loader({
      apiKey:'AIzaSyBcisNaYJY8S3l2GF1l3q92aUzUlxRFHc0'
    });

    loader.load().then(()=>{
      console.log("Loaded map!!!!");

      var map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: new google.maps.LatLng(user_lat,user_lng),
        zoom: 16,
        streetViewControl: false,
        fullscreenControl: false
      });

      //create the marker
      const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(user_lat,user_lng),
        map: map,
        icon: image
      });

      const fabContainerDiv = document.getElementById("fab-container");
      map.controls[google.maps.ControlPosition.RIGHT_TOP].push(fabContainerDiv!);

    });
    
  }

  fabButtons = ['add','filter_alt','room'];
  buttons :string[] = [];
  fabTogglerState = 'inactive';

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  
}
