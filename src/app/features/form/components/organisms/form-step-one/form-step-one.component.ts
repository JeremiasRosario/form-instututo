import { Component, signal } from '@angular/core';
import { CheckBoxFormComponent } from '@shared/components/atoms/check-box/check-box-form/check-box-form.component';
import { InputFormComponent } from "@shared/components/atoms/input/input-form/input-form.component";
import { TextAreaComponent } from '@shared/components/atoms/text-area/text-area-form/text-area-form.component';
import { RadioFormComponent } from "../../../../../shared/components/atoms/radio-button/radio-form/radio-form.component";

export interface Options {
  name: string;
  key: any;
}

@Component({
  selector: 'organisms-form-step-one',
  imports: [InputFormComponent, TextAreaComponent, RadioFormComponent],
  templateUrl: './form-step-one.component.html',
})

export class FormStepOneComponent {

  options = signal<Options[]>([
    { name: 'No', key: '1' },
    { name: 'Si', key: '12' },
    { name: 'Si', key: '12' },
  ])

}
