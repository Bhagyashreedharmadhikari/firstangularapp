import{ Directive,OnInit, ElementRef } from '@angular/core';

@Directive({
    selector:'[custom]'
})
export class CustomDirective implements OnInit{
    constructor(){

    }
ngOnInit(){
// this.elementRef.nativeElement.style.color ="red";
document.write("hiii");

}
}