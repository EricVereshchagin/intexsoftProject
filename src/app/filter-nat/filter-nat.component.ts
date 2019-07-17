import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

const LIST: string[] = [
  'AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NL', 'NZ', 'TR', 'US'
];

@Component({
  selector: 'app-filter-nat',
  templateUrl: './filter-nat.component.html',
  styleUrls: ['./filter-nat.component.css']
})


export class FilterNatComponent implements OnInit {
  public list: string[] = LIST;
  public activeItem: string='';
  public flag:Boolean = true ;
  public i =1;
  constructor(private cardsService: CardsService) { }

  public onSelectItem(item: string): void {       
      if(this.activeItem!=item){
        this.activeItem = item;
        this.cardsService.setNat(item);       
      }
      else{
      this.activeItem = ''
      this.cardsService.setNat('');
      }
  }
  ngOnInit() {
  }

}
