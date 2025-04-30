import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'atom-text-area',
  imports: [IftaLabelModule, TextareaModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true,
    },
  ],
  templateUrl: './text-area-form.component.html',
})
export class TextAreaComponent implements ControlValueAccessor {

  placeholder = input<string>('');
  labelFor = input<string>('');
  label = input<string>('');
  rows = input<number>(5);
  cols = input<number>(30);
  value: string = '';

  private onChangeFn: (v: any) => void = () => { };
  private onTouchedFn: () => void = () => { };


  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  handleInput(ev: Event) {
    const v = (ev.target as HTMLInputElement).value;
    this.value = v;
    this.onChangeFn(v);
  }

  handleBlur() {
    this.onTouchedFn();
  }

}
