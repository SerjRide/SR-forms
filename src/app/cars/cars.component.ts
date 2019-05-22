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

  addCarStatus  = '';
  inputText1    = '';
  inputText2    = '';
  inputText3    = '';
  carName       = '';
  addCarStatus2 = false;
  cars          = ['Ford', 'Audi', 'BMW'];
  items         = [
    {id: 1, value: '1fwefq21'},
    {id: 2, value: '43t4g4g3'},
    {id: 3, value: '3f24g3gh'}
  ];

  constructor() {}

  addCar() {
    this.addCarStatus = 'Car added!';
    setTimeout(() => this.addCarStatus = '', 1000);
  }

  onChangeInput1(e) { this.inputText1 = e.target.value }

  onChangeInput2(v) { this.inputText2 = v }

  onKeyUp(e) { this.inputText3 = e.target.value }

  addCar2() {
    this.addCarStatus2 = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  cancel() {
    const { cars } = this
    this.addCarStatus2 = false;
    if (cars.length > 3) this.cars = cars.slice(0, cars.length - 1);
  }

  setPulseText(car: string) { return car.length > 4 ? true : false }

}
