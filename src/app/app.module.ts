import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';

import { FormsModule } from '@angular/forms';
import { AddCarComponent } from './add-car/add-car.component';
import { ColorDirective } from './directives/color.directive';
import { PowPipe } from './pow.pipe';
import { SearchListComponent } from './search-list/search-list.component';
import { CarFilterPipe } from './car-filter.pipe';
import { CarSellComponent } from './car-sell/car-sell.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    ColorDirective,
    PowPipe,
    SearchListComponent,
    CarFilterPipe,
    CarSellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
