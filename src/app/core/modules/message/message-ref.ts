import { ComponentRef } from "@angular/core";
import { Observable } from "rxjs";
import { MessageComponent } from "./message/message.component";

export class MessageRef {
  constructor(private componentRef: ComponentRef<MessageComponent>) { }

  afterClosed(): Observable<any> {
    return this.componentRef.instance.closed.asObservable();
  }
}