import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appreils =[
{name:"machine à laver",statut:"On"},
{name:"Telephone",statut:"On"},
{name:"telephone",statut:"Off"}]
  constructor() { }

  // Function to switch all devices on
  switchAllOn() {
    this.appreils.forEach(appareil => {
      appareil.statut = "On";
    });
  }

  // Function to switch all devices off
  switchAllOff() {
    this.appreils.forEach(appareil => {
      appareil.statut = "Off";
    });}
}
