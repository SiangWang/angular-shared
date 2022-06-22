import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-title-button',
  templateUrl: './title-button.component.html',
  styleUrls: ['./title-button.component.scss']
})
export class TitleButtonComponent {
  @HostBinding('style.borderRadius') borderRadius = '50%';
  @Input() active?: boolean;
}
