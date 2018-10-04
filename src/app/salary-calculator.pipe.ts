import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryCalculator'
})
export class SalaryCalculatorPipe implements PipeTransform {

  transform(salary: any, months: any): any {
    return salary * months;
  }

}
