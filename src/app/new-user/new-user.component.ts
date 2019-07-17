import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  fullNameControl: FormGroup;
  isSubmited = false;
  constructor() { } 
 
  onSubmit(){
    this.isSubmited = true;
    //если всё валидно то отправляем
     if(!this.fullNameControl.invalid){
       return alert('Успешно!!!\n\n' + JSON.stringify(this.fullNameControl.value))
      } 
     }
     
  ngOnInit() {

    this.fullNameControl = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[А-Яа-яЁёA-Za-z]*')]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[А-Яа-яЁёA-Za-z]*')]),
      path: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
    console.log(this.fullNameControl.controls.password.errors.minLength)
    //check log
    this.fullNameControl.valueChanges.subscribe((value)=>console.log(value));
    this.fullNameControl.statusChanges.subscribe((status)=>console.log(status));
  }
  

  get f() { return this.fullNameControl.controls; }
}
