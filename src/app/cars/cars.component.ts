import { Component, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.Native
})

export class CarsComponent {

  addCarStatus  = '';
  inputText1    = '';
  inputText2    = '';
  inputText3    = '';
  carName       = '';
  carYear       : number;
  addCarStatus2 = false;
  cars          = ['Ford', 'Audi', 'BMW'];
  cars2  = [
    {name:'Honda',        mark: 'Civic', year: 1994},
    {name:'Aston Martin', mark: 'DB9',   year: 2001},
    {name:'Mitsubishi',   mark: 'Evo',   year: 2005}
  ];
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
  numbers = [1, 4, 8, 2];
  current = 3;
  pi = Math.PI;
  asyncTitle = of('Async title 3 seconds').pipe(delay(3000));


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

  setPulseText  (car: string) { return car.length > 4 ? true : false };

  setPulseText2 (car) { return car.year > 2000 ? true : false };

  updateCarList(car: {name: string, mark: string, year: number}){
    this.cars2.push(car);
  }

  cancel2() {
    const { cars2 } = this;
    if (cars2.length > 3) this.cars2 = cars2.slice(0, cars2.length - 1);
  }

  onClick(num: number) { this.current = num }

}
