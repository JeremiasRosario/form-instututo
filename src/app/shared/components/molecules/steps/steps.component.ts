import { Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';

@Component({
  selector: 'molecules-steps',
  imports: [StepsModule],
  templateUrl: './steps.component.html',
})
export class StepsComponent {

  items: MenuItem[] = [];
  activeIndex = signal<number>(0);

  constructor() {
    this.items = [
      { label: 'Step 1', command: () => this.onStepChange(0) },
      { label: 'Step 2', command: () => this.onStepChange(1) },
      { label: 'Step 3', command: () => this.onStepChange(2) },
    ];
  }

  onStepChange(index: number) {
    this.activeIndex.update(() => index);
  }
}
