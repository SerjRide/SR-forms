import { Component } from '@angular/core';

@Component({
  selector: 'app-car',

  templateUrl: './car.component.html',

  // template: `
  //
  //   <h4>Car</h4>
  //
  // `,

  styleUrls: ['./car.component.scss']

  // styles: [`
  //
  //   h4 { color: aqua; }
  //
  // `]
})
export class CarComponent  {

  carName = "Ford";
  carYear = 2015;

  getName() {
    return this.carName
  }

}
