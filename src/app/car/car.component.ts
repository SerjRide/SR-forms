import { Component, Input } from '@angular/core';

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

  private carItem;
  @Input("carItem") car : {name: string, mark: string, year: number};

}
