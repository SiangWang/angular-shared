import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { SelectOptionTemplateDirective } from './select-option-template.directive';

@NgModule({
  declarations: [
    SelectComponent,
    SelectOptionTemplateDirective
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    SelectComponent,
    SelectOptionTemplateDirective
  ]
})
export class SelectModule { }
