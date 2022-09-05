import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isEmptyValue'
})
export class IsEmptyValuePipe implements PipeTransform {

  transform(value: string): string {
    return value ? value : 'Not provided';
  }
}
