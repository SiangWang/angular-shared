import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  mediaQueryList?: MediaQueryList;

  constructor(media: MediaMatcher) {
    this.mediaQueryList = media.matchMedia('(max-width: 1400px)');
    fromEvent<MediaQueryListEvent>(this.mediaQueryList, 'change').subscribe();
  }
}
