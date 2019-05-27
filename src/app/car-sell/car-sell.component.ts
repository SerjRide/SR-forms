import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-sell',
  templateUrl: './car-sell.component.html',
  styleUrls: ['./car-sell.component.scss']
})

export class CarSellComponent {

  carName = '';
  cars = [
    { name: 'Ford',   isSold: false },
    { name: 'Mazda',  isSold: true },
    { name: 'Toyota', isSold: true }
  ];

  @Input() car;

  addCarToList() {
    this.cars.push({ name: this.carName, isSold: true });
    this.carName = '';
  }

  changeStatus(classList, car) {
    if (classList[3] === 'btn-disable') return;
    car.isSold = car.isSold ? false : true;
  }

}
