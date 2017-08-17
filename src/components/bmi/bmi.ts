import { Component } from '@angular/core';

/**
 * Generated class for the BmiComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'bmi',
  templateUrl: 'bmi.html'
})
export class BmiComponent {

  text: string;

  constructor() {
    console.log('Hello BmiComponent Component');
    this.text = 'Hello World';
  }

}
