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
}
