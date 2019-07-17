import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-filter-gender',
  templateUrl: './filter-gender.component.html',
  styleUrls: ['./filter-gender.component.css']
})
export class FilterGenderComponent implements OnInit {
  // diActivat:String;
  flag= true;
  
  maleChecked:String;
  femaleChecked:String;
  allChecked:String;

  constructor(private cardsService:CardsService) { }
  
  getMale(){
    if(this.flag){
      this.cardsService.setGenderAll('male');
      this.maleChecked = "checked"; 
      this.flag =false;
      this.allChecked= "disabled";
    }
    else{
      this.cardsService.setGenderAll('');
      this.allChecked= "";
      this.flag =true;
    }
  }
  
  getFemale(){
    if(this.flag){
      this.cardsService.setGenderAll('female');
      this.femaleChecked = "checked"
      this.allChecked= "disabled";
      this.flag =false;
    }
    else{
      this.cardsService.setGenderAll('');
      this.flag =true;
      this.allChecked= "";
    }
  }
  
  getGender(){
      this.cardsService.setGenderAll('')
  }

  ngOnInit() {
  }

}
