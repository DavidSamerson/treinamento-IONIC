import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args) {

    let palavra: string[] = value.split(' ');
    let saida: string = '';

    palavra.forEach(( value: string, index: number, pavavra: string[]) => {

      saida += value.charAt(0).toUpperCase() + value.substr(1);

    });

    return saida;
  }
}
