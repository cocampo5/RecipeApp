import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen: boolean;

  @HostListener('click') toggleOpen() {
    if (!this.isOpen) {
      this.renderer.addClass(this.elRef.nativeElement.getElementsByClassName('dropdown-menu')[0], 'show');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement.getElementsByClassName('dropdown-menu')[0], 'show');
    }
    this.isOpen = !this.isOpen;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.isOpen = false;
  }
}
