import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  todo() {
    window.open("https://github.com/IagoMenezes555/To-Do-List", "_blank");
  }

  urna(){
    window.open("https://github.com/IagoMenezes555/Urna-7", "_blank");
  }

  estoque(){
    window.open("https://github.com/IagoMenezes555/APP-de-Estoque", "_blank");
  }
}
