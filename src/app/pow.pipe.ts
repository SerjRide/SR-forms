import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name:'appPow' })

export class PowPipe implements PipeTransform {

  transform(value: any, powNumber: number = 2, str: string) {
    return str + Math.pow(value, powNumber);
  }

}
