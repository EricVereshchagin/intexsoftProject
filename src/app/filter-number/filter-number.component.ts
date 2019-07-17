import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-number',
  templateUrl: './filter-number.component.html',
  styleUrls: ['./filter-number.component.css']
})
export class FilterNumberComponent implements OnInit {
  size;
  
  sizePage: FormControl;
  isSubmited:boolean= false;
  constructor(private cardsService:CardsService) { }

  ngOnInit() {
    this.sizePage = new FormControl('', [Validators.required, Validators.pattern("[0-9]*"), Validators.max(5000)]);
    
  }
  
  getChange(){
    console.log(this.size);
    this.cardsService.setSize(+this.size);
    this.isSubmited = true
  }

  get f() { return this.sizePage; }
}
