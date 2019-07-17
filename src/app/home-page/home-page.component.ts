import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cazino_cards = [];
  searchStr = '';
  // searchStr.toLowerCase( );
  // toLowerCase( )
  constructor(private cardsService: CardsService) { }
  
  isPuls = false;

  
  getPuls(){
    this.isPuls = true
  }
  getReg(){
    this.isPuls = false

    // ......
  }
  
  ngOnInit(){
     //this.cazino_cards = this.cardsService.cazino_card
       this.cardsService.getCazinoCards().subscribe(cazino_cards=>{
        console.log(cazino_cards)
        this.cazino_cards = cazino_cards;                           
     })
   }
}
