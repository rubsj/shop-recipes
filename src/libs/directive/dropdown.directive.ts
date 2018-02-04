import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';


@Directive({
  selector : '[toggleDropdownDirective]'
})
export class ToggleDropdownDirective{
     constructor(private elementRef: ElementRef , private renderer : Renderer2){}

     classAdd : boolean = false;
  //using host binding
  @HostBinding('class.open')isOpen: boolean;

     //using renderer
  /*   @HostListener('click') buttonClickEvent(eventData : Event){
       console.log('eventData ' , eventData);
       console.log('native elemt ' , this.elementRef.nativeElement );
       if(this.classAdd){
         this.classAdd = false;
         this.renderer.removeClass(this.elementRef.nativeElement, 'open');
       }else{
         this.classAdd = true;
         this.renderer.addClass(this.elementRef.nativeElement, 'open');
       }*/

     @HostListener('click') buttonClickEvent(eventData : Event){
         this.isOpen  = !this.isOpen;
     }
}
