import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})

export class CarsComponent {

  addCarStatus = '';
  inputText1 = '';
  inputText2 = '';
  inputText3 = '';

  constructor() {}

  addCar() {
    this.addCarStatus = 'Car added!';
    setTimeout(() => this.addCarStatus = '', 1000);
  }

  onChangeInput1(e) {
    this.inputText1 = e.target.value;
  }

  onChangeInput2(v) { this.inputText2 = v }

  onKeyUp(e) { this.inputText3 = e.target.value }

}
