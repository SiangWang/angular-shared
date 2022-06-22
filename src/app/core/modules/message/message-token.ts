import { InjectionToken } from "@angular/core";
import { Message } from "./message";

export const MESSAGE = new InjectionToken<Message>('message');
