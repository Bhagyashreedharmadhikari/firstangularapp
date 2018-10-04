import { Pipe, PipeTransform } from '@angular/core';
// import * as moment from 'moment';
@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(birthyear:any , currentyear: any): any {
    // return date - months;
   
    // return birthyear;
    //  currentyear = parseInt(currentyear);
   
    // return currentyear - birthyear;

  }

}
