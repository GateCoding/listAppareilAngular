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
  url="http://localhost:8082"
  constructor( private htpp :HttpClient ) { }
  getAppareilsList():Observable <Appareil[]>{
    return this.htpp.get<Appareil[]>(`${this.url}/appareil/all`);
  }

  // Function to switch all devices on
  /*switchAllOn() {
    for (let item of this.appreils){ item.status="On"}

  }*/
  switchAllOn() {
    // Envoi de la requête HTTP au backend
    this.htpp.put(`${this.url}/switch-all-on`, {}).subscribe(
      (response) => {
        console.log('Tous les appareils ont été allumés avec succès.', response);
        // Mettez à jour vos données locales si nécessaire
      },
      (error) => {
        console.error('Erreur lors de l\'allumage de tous les appareils.', error);
      }
    );
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

  createAppareil(appreils : Appareil):Observable<Appareil>{
    return this.htpp.post<Appareil>(`${this.url}`,appreils);
  }
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

