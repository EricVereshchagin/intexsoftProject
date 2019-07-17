import { Component } from '@angular/core';
import {CardsService} from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardsService]
})
export class AppComponent {

}
