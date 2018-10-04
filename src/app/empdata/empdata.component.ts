import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service';
@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {
  // name='';
  // technology='';
  emp1=[];
  // emp1=[{name:"bhagya",technology:"python"},{name:"abhi",technology:"php"}];
  // show()

  constructor(private EmpService:EmpService) { }

  ngOnInit() {
    this.emp1 =this.EmpService.getemp();

  }

}
