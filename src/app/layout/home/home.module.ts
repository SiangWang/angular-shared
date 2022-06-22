import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TitleModule } from 'src/app/core/modules/title/title.module';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TitleModule,
    SelectModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
