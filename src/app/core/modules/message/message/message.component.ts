import { AfterViewInit, Component, ElementRef, HostBinding, Inject, OnDestroy, ViewChild } from '@angular/core';
import { delay, Subject, Subscription, tap, timer } from 'rxjs';
import { Message } from '../message';
import { MESSAGE } from '../message-token';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements AfterViewInit, OnDestroy {
  @HostBinding('style.width') class = '100%';
  @ViewChild('messageElement') messageElement!: ElementRef<HTMLElement>;

  private closeSubscription?: Subscription;
  public readonly closed = new Subject<any>();

  constructor(@Inject(MESSAGE) public message: Message) { }

  ngAfterViewInit(): void {
    this.closeSubscription = timer(4500).pipe(
      tap(() => this.messageElement.nativeElement.classList.add('closing')),
      delay(500)
    ).subscribe(() => this.closed.next(null));
  }

  ngOnDestroy(): void {
    this.closeSubscription?.unsubscribe();
  }

}
