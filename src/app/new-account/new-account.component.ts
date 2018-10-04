import { Component, OnInit } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService: LoggingService, 
    private accountsService: AccountsService) { }


    onCreateAccount(accountName: string, accountStatus: string) {
      this.accountsService.addAccount(accountName, accountStatus);
      this.loggingService.logStatusChange(accountStatus);
    }
  ngOnInit() {
  }

}
