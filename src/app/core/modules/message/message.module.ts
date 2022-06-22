import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers: [
    MessageService
  ]
})
export class MessageModule { }
