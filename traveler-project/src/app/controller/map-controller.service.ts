import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyLocation } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class MapControllerService {

  public locationsArray: MyLocation[] = [];
  
  constructor(private http: HttpClient){
    this.readFile();
  }

  readFile(){
    this.http.get('/assets/OurBumble-DB.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.locationsArray.push(new MyLocation( row[0],row[1],row[2],parseFloat( row[3]), parseFloat( row[4]), row[5], row[6].trim()));
            }
        },
        error => {
            console.log(error);
        }
    );
  }

  getLocations(){
    return this.locationsArray;
  }
} 
