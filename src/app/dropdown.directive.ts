import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[pdgDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }
  @HostListener('mouseover') open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }

  constructor() { }

  private isOpen = false;

}
