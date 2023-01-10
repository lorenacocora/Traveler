import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { take } from 'rxjs/operators';
import { MapControllerService } from 'src/app/controller/map-controller.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit{

  map : google.maps.Map | undefined;
  user_lat = 0;
  user_lng = 0;

  constructor(private mapController: MapControllerService){
    this.mapController = mapController;
  }


  ngOnInit(): void{ this.getCoords(); }


  getCoords(){

    //get current location of user
    navigator.geolocation.getCurrentPosition((position)=>{

      //load the map in the browser
      this.user_lat = position.coords.latitude;
      this.user_lng = position.coords.longitude;
      this.loadMap(position.coords.latitude, position.coords.longitude)
    },(error)=>{
      console.log(error);
      alert(error.message)
    },{timeout: 10000});
  }
  

  loadMap(user_lat:number,user_lng:number): void {

    let loader = new Loader({
      apiKey:'AIzaSyBcisNaYJY8S3l2GF1l3q92aUzUlxRFHc0'
    });

    loader.load().then(()=>{
      console.log("Loaded map!!!!");

      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: new google.maps.LatLng(user_lat,user_lng),
        zoom: 15,
        streetViewControl: false,
        fullscreenControl: false,
      });

      
      //create the marker for users position
      const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(user_lat,user_lng),
        map: this.map,
        icon: "file:///D:/Traveler/traveler-project/src/assets/pin1.jpg",
        animation: google.maps.Animation.DROP,
      });

      var infowindow = new google.maps.InfoWindow({
        content: "<span>You are here</span>"
      });
    
      google.maps.event.addListener(marker, 'click', () => {
      infowindow.open(this.map,marker);
      });


      //adding the fabs to the google maps api
      const fabContainerDiv = document.getElementById("fab-container");
      this.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(fabContainerDiv!);

      //create markers for locations
      var locations = this.mapController.getLocations();

      locations.forEach((location)=>{
        
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(location.latitude,location.longitude),
          map: this.map,
        });

        var infowindow = new google.maps.InfoWindow({
          content: `<p>${location.name}</p>
                    <p>${location.comments}</p>
                    <button>more</button>`
        });
      
        google.maps.event.addListener(marker, 'click', () => {
        infowindow.open(this.map,marker);
        });
      })

    });
  }

  returnToLocation(){
    this.map?.setCenter(new google.maps.LatLng(this.user_lat,this.user_lng));
    this.map?.setZoom(20);
  }
}
