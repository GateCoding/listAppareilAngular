import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from "../service/appareil.service";
import {Appareil} from "../model/Appareil";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  appareil : Appareil[] | undefined;
  appareils : Appareil = new Appareil();
  @Input()  id: number=2;
  @Input() appareilName: String = "Téléphone";
    @Input() appareilStatut:String="On";
  appareilAvatar:String="assets/images/avatar1.png"
  constructor(private service:AppareilService) {
  }
  ngOnInit(): void {
    this.getAppareils();
    //this.appareils= this.service.findAll().subscribe(data=>{this.appareils=data;});
  }
  getColor(): String {
    if (this.appareilStatut ==="On") return "green"
    else return "red";
  }
  toggleStatus() {
    //this.appareilStatut = this.appareilStatut === 'On' ? 'Off' : 'On';
  }
  changeState(){
this.service.switch(this.id)

  }

  private getAppareils(){
    this.service.getAppareilsList().subscribe(data => {
      this.appareil = data;

    });
  }
  createAppareil(){
    this.service.createAppareil(this.appareils).subscribe(data=>{
      console.log(data);
      window.location.reload();
    });
  }

  ngSubmit(){
    this.createAppareil();
  }


}
