import { Component, Input, ContentChild, ElementRef } from '@angular/core';

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
  @ContentChild("innerAlert") innerAlert : ElementRef;

  ngAfterViewInit() {
    if ((Math.random() * 10 | 0) < 4) {
      this.innerAlert.nativeElement.textContent = 'Продано!'
    }
  }

}
