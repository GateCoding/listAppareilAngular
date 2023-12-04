import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Appareil} from "../model/Appareil";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appreils:any;
//url
  url="http://localhost:8082/appareil/all"
  constructor( private htpp :HttpClient ) { }
  findAll():Observable <Appareil[]>{
    return this.htpp.get<Appareil[]>(this.url);
  }

  // Function to switch all devices on
  switchAllOn() {
    for (let item of this.appreils){ item.status="On"}

  }

  // Function to switch all devices off
  switchAllOff() {
    for (let item of this.appreils){ item.status="Off"}

  }
 /* switch(id:number): void {
if(this.appreils[id].statut==="On"){
  this.appreils[id].statut= "Off";
}
else {
  this.appreils[id].statut="On"
}
  }*/

  switch(id:number): void {
    for (let item of this.appreils){
      if(item.id == id){
        if(item.statut=="On"){
          item.statut="Off"
        }
        item.statut="On"
      }
    }
    if(this.appreils[id].statut==="On"){
      this.appreils[id].statut= "Off";
    }
    else {
      this.appreils[id].statut="On"
    }
  }
}

