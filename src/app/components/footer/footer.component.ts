import { Component } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
