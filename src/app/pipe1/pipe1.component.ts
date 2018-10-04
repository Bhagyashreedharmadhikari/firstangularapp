import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe1',
  templateUrl: './pipe1.component.html',
  styleUrls: ['./pipe1.component.css']
})
export class Pipe1Component implements OnInit {
  id='';
  name1='';
  name='';
  dob='';
  email='';
  age='';


  // idError = '';
  nameError = '';
  name1Error = '';
  dobError = '';
  emailError ='';
  ageError ='';

  person1=[{id:"",name1:"dharma",name:"bhagya",dob:"12/03/2013",email:"bhagya@gmail.com",age:"23"}];

  add()
  {
    console.log(this.name1);
    // if(this.id ==='')
    // this.idError ="please enter id";
    // else
    // this.idError ="";


    if(this.name1 ==='')
    this.nameError="please enter name";
    else
    this.nameError="";

    if(this.name ==='')
    this.nameError="please enter name";
    else
    this.nameError="";



    if(this.dob ==='')
    this.dobError="please enter salary";
    else
    this.dobError="";

    if(this.email ==='')
    this.emailError="please enter email";
    else
    this.emailError="";

    if(this.age ==='')
    this.ageError="please enter age";
    else
    this.ageError="";


    if( this.name1 != '' && this.name !=''&& this.dob !='' && this.email !=''&& this.age !='')
    this.person1.push({"id":this.id,"name1":this.name1,"name":this.name,"dob":this.dob,"email":this.email,"age":this.age});
  }

  constructor() { }

  ngOnInit() {
  }

}
