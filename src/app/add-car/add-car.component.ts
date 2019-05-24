import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  carName               = '';
  carYear               : number;
  @Output() onAddCar    = new EventEmitter<{name: string, year: number}>();
  @Output('onCancel') c = new EventEmitter();

  addCar3() {
    this.onAddCar.emit({
      name: this.carName,
      year: this.carYear
    });
    this.carName = '';
    this.carYear = 1997;
  };

  cancel() { this.c.emit() };

}
