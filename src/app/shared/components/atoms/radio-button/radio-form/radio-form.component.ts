import { Component, input, signal, untracked } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { RadioButton } from 'primeng/radiobutton';

@Component({
  selector: 'atom-radio-form',
  imports: [RadioButton],
  templateUrl: './radio-form.component.html',
})
export class RadioFormComponent implements ControlValueAccessor {
  label = input.required<string>();
  options = input.required<{ name: string; key: string }[]>();

  value = signal<boolean>(false);

  private onChange: (v: boolean) => void = () => { };
  private onTouched: () => void = () => { };

  writeValue(obj: boolean): void {
    untracked(() => this.value.set(obj));
  }

  registerOnChange(fn: (v: boolean) => void): void {
    console.log('registerOnChange', fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }


  handleCheckBoxChange(checked: any) {
    console.log('handleCheckBoxChange', checked);
    this.value.set(checked);
    this.onTouched();
    this.onChange(checked);
  }
}
