import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { Message } from './message';
import { MessageRef } from './message-ref';
import { MESSAGE } from './message-token';
import { MessageComponent } from './message/message.component';

@Injectable()
export class MessageService {
  private overlayRef?: OverlayRef;

  constructor(private overlay: Overlay) { }

  show(message: Message): MessageRef {
    this.overlayRef?.detach();

    this.overlayRef = this.overlay.create({ width: '100%' });

    const componentRef = this.overlayRef?.attach(new ComponentPortal(
      MessageComponent,
      null,
      Injector.create({
        providers: [
          {
            provide: MESSAGE,
            useValue: message
          }
        ]
      })
    ));

    const messageRef = new MessageRef(componentRef);

    messageRef.afterClosed().subscribe(() => this.overlayRef?.detach());

    return messageRef;
  }
}
