import { Directive, ElementRef } from '@angular/core';

/**
 * Generated class for the BackgroundGreenDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[backgroundGreen]' // Attribute selector
})
export class BackgroundGreenDirective {

  constructor(
    public el: ElementRef
  ) {
    this.el.nativeElement.style.BackgroundColor = 'green';
    console.log('Hello BackgroundGreenDirective Directive');
  }

}
