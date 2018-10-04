import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } fr


import { AppComponent } from './app.component';
// import { HeadingComponent } from '../heading/heading.component';
import { DatabindComponent } from './databind/databind.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { Demo1Component } from './demo1/demo1.component';
import { DirectiveComponent } from './directive/directive.component';
import { CustomDirective} from './custom-directive.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
// import { ResultComponent } from './result/result.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
import { EmpnameComponent } from './empname/empname.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { EmpService } from './emp.service';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PipesComponent } from './pipes/pipes.component';
import { SalaryCalculatorPipe } from './salary-calculator.pipe';
import { AgePipe } from './age.pipe';
import { CapitalPipe } from './capital.pipe';
import { Pipe1Component } from './pipe1/pipe1.component';
import { FormComponent } from './form/form.component';
import { Form1Component } from './form1/form1.component';


@NgModule({
  declarations: [
    AppComponent,
    // HeadingComponent,
    DatabindComponent,
    CalculatorComponent,
    Demo1Component,
    DirectiveComponent,
    CustomDirective,
    AccountComponent,
    NewAccountComponent,
    // ResultComponent,
    EmpnameComponent,
    EmpdataComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    PipesComponent,
    SalaryCalculatorPipe,
    AgePipe,
    CapitalPipe,
    Pipe1Component,
    FormComponent,
    Form1Component
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,

    RouterModule.forRoot([
      {
        path: 'home',
        component:HomeComponent
      },
      {
        path:'aboutus'  ,
        component:AboutusComponent
      },
      {
        path:'contactus'  ,
        component:ContactusComponent
      }
    ])
  ],
  providers: [AccountsService, LoggingService,EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
