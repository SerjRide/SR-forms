import { Component } from '@angular/core';

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
  dates         = [
    new Date(2015, 3, 14),
    new Date(2016, 6, 22),
    new Date(2017, 7, 15),
    new Date(2015, 4, 6)
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
