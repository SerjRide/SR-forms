import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-car-add-second',
  templateUrl: './car-add-second.component.html',
  styleUrls: ['./car-add-second.component.scss']
})
export class CarAddSecondComponent  {

  @Output() onCarAdd = new EventEmitter<String>();
  carName = '';

  addCar() {
    this.onCarAdd.emit(this.carName);
    this.carName = '';
  }

}
