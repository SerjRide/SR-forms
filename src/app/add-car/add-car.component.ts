import { Component, EventEmitter, Output,
         ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {

  carYear               : number;
  @Output() onAddCar    = new EventEmitter<{name: string,
                                            mark: string,
                                            year: number}>();
  @Output('onCancel') c = new EventEmitter();
  @ViewChild('carMarkInput') carMark : ElementRef;

  addCar(carName : HTMLInputElement) {
    this.onAddCar.emit({
      name: carName.value,
      mark: this.carMark.nativeElement.value,
      year: this.carYear
    });
    carName.value = '';
    this.carMark.nativeElement.value = '';
    this.carYear = 1997;
  };

  cancel() { this.c.emit() };

}
