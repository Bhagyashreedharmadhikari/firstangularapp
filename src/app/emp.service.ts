import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  getemp(){
    return[
      {name:"bhagya",
      technology:"php"},
      {name:"nisha",
      technology:"php"},
      {name:"arman",
      technology:"php"},
      {name:"ganesh",
      technology:"php"},
    ]
  }
  // emp1=[{name:"bhagya",technology:"php"}];

  constructor() { }
}
