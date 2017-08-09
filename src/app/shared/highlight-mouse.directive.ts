import { Directive, HostListener, HostBinding,
  ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this.renderer.setElementStyle(
    //   this.elementRef.nativeElement,
    //   'background-color', 'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
  // this.renderer.setElementStyle(
  //   this.elementRef.nativeElement,
  //   'background-color', 'white'
  //   );
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: String;
     @HostBinding('style.backgroundColor') get setColor(){
       //codigo extra;
       return this.backgroundColor;
     }
     private backgroundColor: String;

  constructor(
    // private elementRef: ElementRef,
    // private renderer: Renderer
  ) { }

}
