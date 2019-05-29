import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'SR-forms';

  cars = [
    { name: 'Ford',     isSold: false },
    { name: 'Mazda',    isSold: true },
    { name: 'Mercedes', isSold: false }
  ];

  addCarToList(carName: string) {
    this.cars.push({ name: carName, isSold: false })
  };

}
