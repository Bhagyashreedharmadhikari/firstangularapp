import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  id='';
  name='';
  salary='';


  idError = '';
  nameError = '';
  salaryError = '';
  // setStatus = false;
  // names=['bhagya','margi','rutu'];
  names1=[{id:'1',name:"bhagya",salary:"25000"},{id:'2',name:"rutu",salary:"2100"}];
  // show()
  // {
  //   this.setStatus = ! this.setStatus;
  // }
  add()
  {
    if(this.id ==='')
    this.idError ="please enter id";
    else
    this.idError ="";


    if(this.name ==='')
    this.nameError="please enter name";
    else
    this.nameError="";


    if(this.salary ==='')
    this.salaryError="please enter salary";
    else
    this.salaryError="";


    if(this.id != ''&& this.name !=''&& this.salary !='')
    this.names1.push({"id":this.id,"name":this.name,"salary":this.salary});
  }

  showStudent(id){
    console.log(id);
    this.id = (this.names1[id].id);
    this.name = (this.names1[id].name);
    this.salary = (this.names1[id].salary);
  }

  updateStudent(id){
    this.names1[id] = {"id":this.id,"name":this.name,"salary":this.salary};
    
  }
  deleteStudent(id:number){
    this.names1.splice(id,1);
  }
  constructor() { }

  ngOnInit() {
  }

}
