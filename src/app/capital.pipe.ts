import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  transform(name1: string): any {
    if (name1 === null) return 'Not assigned';
    return name1.charAt(0).toUpperCase() + name1.slice(1);
   
    // if (name === null) return 'Not assigned';
    // return name.charAt(0).toUpperCase() + name.slice(1);
   
  }

}
