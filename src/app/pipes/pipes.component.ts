import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
Id:'';
fname:'';
lname:'';
salary:'';
date:'';
percentage:'';

person=[{Id:"",fname:"Bhagyashree",lname:"Dharmadhikari",salary:"2000",date:"12/03/2018",percentage:2}];
  
constructor() { }

  ngOnInit() {
  }

}
