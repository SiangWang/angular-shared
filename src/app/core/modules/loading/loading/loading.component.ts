import { BooleanInput } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div *ngIf="hasBackdrop" class="position-absolute top-0 end-0 bottom-0 start-0 bg-white opacity-75"></div>
    <div class="h-100 d-flex justify-content-center align-items-center">
        <div class="spinner-border text-primary"></div>
    </div>
  `
})
export class LoadingComponent {
  @Input()
  get hasBackdrop(): boolean {
    return this._hasBackdrop;
  }
  set hasBackdrop(value: BooleanInput) {
    this._hasBackdrop = value !== null && `${value}` !== 'false';
  }

  private _hasBackdrop: boolean = false;
}
