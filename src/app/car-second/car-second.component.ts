import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-second',
  templateUrl: './car-second.component.html',
  styleUrls: ['./car-second.component.scss']
})
export class CarSecondComponent {

  @Input() car;

  getClass() {
    return {
      'list-group-item-success' : !this.car.isSold,
      'list-group-item-danger'  : this.car.isSold,
      'list-group-item'         : true
    }
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy' ? true : false;
  }

}
