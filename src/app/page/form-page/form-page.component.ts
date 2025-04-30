import { Component, inject, signal } from '@angular/core';
import { FormAdbuilderService } from '../../features/form/services/form.service';
import { StepsComponent } from '../../shared/components/molecules/steps/steps.component';
import { FormStepsComponent } from '../../features/form/components/templates/form-steps/form-steps.component';

@Component({
  selector: 'form-page',
  imports: [StepsComponent, FormStepsComponent],
  templateUrl: './form-page.component.html',
})
export class FormPageComponent {

  private readonly form = inject(FormAdbuilderService)


  formStatus = signal<string>('1');
  formData = signal<any>({});
  formErrors = signal<any>({});
  formSubmitted = signal<boolean>(false);

  constructor() {
    this.formData.set(this.form.buildForm().value);
  }

  onSubmit() {
    this.formSubmitted.set(true);
    this.formErrors.set(this.form.buildForm().errors);
    console.log(this.form.buildForm().errors);
    if (this.form.buildForm().valid) {
      this.formSubmitted.set(false);
      this.formErrors.set({});
      console.log(this.form.buildForm().value);
    }
  }

}
