import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLength'
})
export class TextLengthPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    const limit = args.length > 0 ? args[0] : 30;
    const dots = value?.length > args[0] ? '...' : ''
    return value?.length ? value.substring(0, limit) + dots : 'Not provided';
  }
}
