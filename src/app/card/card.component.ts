import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { publishLast } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  @Output() puls: EventEmitter<any> = new EventEmitter();

  constructor() { }
  
  onClick(){
    this.puls.emit();
  }

  ngOnInit() {
  }

}
 