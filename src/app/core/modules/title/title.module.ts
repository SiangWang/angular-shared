import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleBackButtonComponent } from './title-back-button/title-back-button.component';
import { TitleComponent } from './title/title.component';
import { TitleTemplateDirective } from './title-template.directive';
import { MatIconModule } from '@angular/material/icon';
import { TitleButtonComponent } from './title-button/title-button.component';

@NgModule({
  declarations: [
    TitleBackButtonComponent,
    TitleComponent,
    TitleTemplateDirective,
    TitleButtonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    TitleBackButtonComponent,
    TitleComponent,
    TitleTemplateDirective,
    TitleButtonComponent
  ]
})
export class TitleModule { }
