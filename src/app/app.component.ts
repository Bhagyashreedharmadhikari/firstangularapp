import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';
import { EmpService } from './emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];
  emp1=[];

  constructor(private accountsService: AccountsService,private EmpService:EmpService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
    this.emp1 =this.EmpService.getemp();

  }
}
