import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent  {
  @Input() appareilName: String = "Téléphone";
  @Input() appareilStatut:String="On";
  appareilAvatar:String="assets/images/avatar1.png"
  getColor(): String {
    if (this.appareilStatut ==="On") return "green"
    else return "red";
  }

}
