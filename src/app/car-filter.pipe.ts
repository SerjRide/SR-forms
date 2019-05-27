import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: false
 })

export class CarFilterPipe implements PipeTransform {

  transform(carList, searchStr: string, filter: string = 'name') {
    return !carList.length || !searchStr.length ? carList :
    carList.filter((car) => car[filter].toLowerCase()
           .indexOf(searchStr.toLowerCase()) !== -1);
  }

}
