import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-title-back-button',
  templateUrl: './title-back-button.component.html',
  styleUrls: ['./title-back-button.component.scss']
})
export class TitleBackButtonComponent {
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.marginRight') marginRight = '1rem';
  @HostBinding('style.borderRadius') borderRadius = '50%';
}
