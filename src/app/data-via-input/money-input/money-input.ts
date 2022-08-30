import { Component, Input } from '@angular/core';
import { createMask } from '@ngneat/input-mask';

@Component({
    selector: 'money-input',
    template: `
      <input
        [formControl]="mpFormControl"
        [inputMask]="inputMask"
        placeholder="R$ 0,00"
      />
    `,
})
export class MoneyInput {
    @Input() mpFormControl!: any;

    inputMask = createMask({
      alias: 'numeric',
      digits: 2,
      prefix: 'R$ ',
      placeholder: '0',
      groupSeparator: '.',
      digitsOptional: false,
      parser: (value: string) => {
        console.log(value.replace('R$ ', '').replace('.', ''));
        return value.replace('R$ ', '').replace('.', '');
      },
    });
}