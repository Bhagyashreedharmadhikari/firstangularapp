import { Component, OnInit } from '@angular/core';

import {EmpService} from '../emp.service';
@Component({
  selector: 'app-empname',
  templateUrl: './empname.component.html',
  styleUrls: ['./empname.component.css']
})
export class EmpnameComponent implements OnInit {
emp1 = [];
  constructor(private EmpService:EmpService) { }

  ngOnInit() {
    this.emp1 =this.EmpService.getemp();

  }

}
