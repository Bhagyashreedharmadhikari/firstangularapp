import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {
  a:number;
  b:number;
  // c:number=0;
// fname:string = "";
//  lname:string ="";
// toActivate:boolean=false;

// test()
// {
//   this.c=this.a + this.b;
//   // this.fname="Mr. Ravindra";

// }
  constructor() {
   // this.fname="ravindra";
   // this.lname="dharmadhikari";
    // setTimeout(()=>{
    //   this.toActivate=true;
    // },3000);
   }

  ngOnInit() {
  }

}
