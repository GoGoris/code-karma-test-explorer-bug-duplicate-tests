import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToTitle'
})
export class CamelCaseToTitlePipe implements PipeTransform {
  transform(value: string): any {
    if (!value || value.length === 0) {
      return value;
    }
    return value.replace(/[A-Z]/g, ' $&').replace(/^./, c => c.toUpperCase());
  }
}
