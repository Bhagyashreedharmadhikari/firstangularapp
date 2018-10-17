import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms'; 
// import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } fr
// import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

// import { DatabindComponent } from './databind/databind.component';
// import { CalculatorComponent } from './calculator/calculator.component';
// import { Demo1Component } from './demo1/demo1.component';
// import { DirectiveComponent } from './directive/directive.component';
// import { CustomDirective} from './custom-directive.directive';
// import { AccountComponent } from './account/account.component';
// import { NewAccountComponent } from './new-account/new-account.component';
// import { ResultComponent } from './result/result.component';
// import { AccountsService } from './accounts.service';
// import { LoggingService } from './logging.service';
// import { EmpnameComponent } from './empname/empname.component';
// import { EmpdataComponent } from './empdata/empdata.component';
// import { EmpService } from './emp.service';
// import { HomeComponent } from './home/home.component';
// import { DataComponent } from './data/data.component';
// import { AboutusComponent } from './aboutus/aboutus.component';
// import { ContactusComponent } from './contactus/contactus.component';
// import { PipesComponent } from './pipes/pipes.component';
// import { SalaryCalculatorPipe } from './salary-calculator.pipe';
// import { AgePipe } from './age.pipe';
// import { CapitalPipe } from './capital.pipe';
// import { Pipe1Component } from './pipe1/pipe1.component';
// import { FormComponent } from './form/form.component';
// import { Form1Component } from './form1/form1.component';
// import { Home1Component } from './home1/home1.component';
// import { Data1Component } from './data1/data1.component';
// import { DataServiceService } from './data-service.service';
// import { HeadingComponent } from './heading/heading.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
    // DatabindComponent,
    // CalculatorComponent,
    // Demo1Component,
    // DirectiveComponent,
    // CustomDirective,
    // AccountComponent,
    // NewAccountComponent,
    // DataComponent,
    // ResultComponent,
    // EmpnameComponent,
    // EmpdataComponent,
    // HomeComponent,
    // AboutusComponent,
    // ContactusComponent,
    // PipesComponent,
    // SalaryCalculatorPipe,
    // AgePipe,
    // CapitalPipe,
    // Pipe1Component,
    // FormComponent,
    // Form1Component,
    // Home1Component,
    // Data1Component,
    // HeadingComponent
    
  ],
  imports: [
    BrowserModule,
    // HttpModule,
    // ReactiveFormsModule,
    // FormsModule,

  //   RouterModule.forRoot([
  //     {
  //       path: 'home',
  //       component:HomeComponent
  //     },
  //     {
  //       path:'aboutus'  ,
  //       component:AboutusComponent
  //     },
  //     {
  //       path:'contactus'  ,
  //       component:ContactusComponent
  //     }
  //   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
