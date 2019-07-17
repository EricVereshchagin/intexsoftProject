import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable()
export class CardsService {

  size = 10;
  gender:String;
  nat:String;
  constructor(private http: HttpClient) { }

  getCazinoCards(){
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location,dob,email,phone&results='+this.size+'&gender='+this.gender+'&nat='+this.nat+'')
    .pipe(map(response => {
      let cards = response["results"];
      console.log(cards)
      return cards.map(function (user:any) {
        return {
          name: user.name.first + ' ' + user.name.last,
          image: user.picture.large,
          geo: user.location.city+', '+user.location.street,
          eml: user.email,
          date: user.dob.date,
          age:  user.dob.age,
          phone: user.phone,
          gender: user.gender   
        };
      })
    }))
 }

 setNat(nat){
   this.nat= nat;
 }
 setGenderAll(gender){
  this.gender=gender
 }

 setSize(size){
    this.size = size; 
  }

}

