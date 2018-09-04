import { Component, Input } from '@angular/core';

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-test',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  @Input() title: string;

  constructor() {
  }

}
