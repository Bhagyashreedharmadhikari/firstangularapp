import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from "@angular/forms"
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userForm = new FormGroup({
    name : new FormControl('sandeep', [ Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    email : new FormControl(null, [Validators.required, Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$')]),
    address : new FormGroup({
      street : new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]),
      city : new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z]+$')])
    }),
    mobile : new FormControl(null, [ Validators.required, Validators.pattern('^[6789][0-9]{9}$')])
  });
  onSubmit(value:any){
    console.log(this.userForm.value); 
  }
}
