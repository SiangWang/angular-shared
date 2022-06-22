import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
