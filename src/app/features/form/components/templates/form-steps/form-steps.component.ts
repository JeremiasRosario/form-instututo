import { Component, input } from '@angular/core';
import { FormStepOneComponent } from "../../organisms/form-step-one/form-step-one.component";

@Component({
  selector: 'template-form-steps',
  imports: [FormStepOneComponent],
  templateUrl: './form-steps.component.html',
})
export class FormStepsComponent {

  stepFrom = input.required<string>();

}
