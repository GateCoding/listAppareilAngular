import {Component, OnInit} from '@angular/core';
import {AppareilService} from "../service/appareil.service";

@Component({
  selector: 'app-list-appareil',
  templateUrl: './list-appareil.component.html',
  styleUrls: ['./list-appareil.component.css']
})
export class ListAppareilComponent implements OnInit{
  isOk:boolean=true;
  appreils:any;

  constructor(private service:AppareilService) {
    setTimeout(()=>{
      this.isOk=false;

    },5000);
  }

  switchOnAll(){
    console.log('allumer');
    alert('alummer tous les appareils')
  }


  ngOnInit(): void {
    this.appreils=this.service.appreils;
  }
}
