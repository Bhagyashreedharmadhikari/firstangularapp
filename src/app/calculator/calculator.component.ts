import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  a:any;
  b:any;
  // c:number;
  d:any;
// one()
// {
//   this.a = 1;
// }
// two()
// {
//   this.b = 2;
// }
// plus()
// {
//   this.c = '+';
// }
add()
{
  this.d = this.a + this.b;
}
sub()
{
  this.d = this.a - this.b;
}
div()
{
  this.d = this.a / this.b;
}
mul()
{
  this.d = this.a * this.b;
}

clr()
{
  this.a = ' ';
  this.b = ' ';
  // this.d =' ';
}
  constructor() { }

  ngOnInit() {
  }

}
