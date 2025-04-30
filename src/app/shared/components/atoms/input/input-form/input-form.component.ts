import { CommonModule } from '@angular/common';
import { Component, input, forwardRef, InputSignal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'atom-input-form',
  standalone: true,
  imports: [IftaLabelModule, InputTextModule, CommonModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputFormComponent),
    multi: true,
  }],
  templateUrl: './input-form.component.html',
})
export class InputFormComponent implements ControlValueAccessor {

  readonly placeholder: InputSignal<string> = input('', { alias: 'placeholder' });
  readonly type: InputSignal<string> = input('text', { alias: 'type' });
  readonly labelFor: InputSignal<string> = input('', { alias: 'labelfor' });
  readonly id: InputSignal<string> = input('', { alias: 'id' });
  readonly label: InputSignal<string> = input('', { alias: 'label' });

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