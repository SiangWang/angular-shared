import { BooleanInput } from '@angular/cdk/coercion';
import { Component, ContentChild, HostBinding, Input } from '@angular/core';
import { TitleTemplateDirective } from '../title-template.directive';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() title?: string | null;

  @Input()
  get sticky(): boolean {
    return this._sticky;
  }
  set sticky(value: BooleanInput) {
    this._sticky = value !== null && `${value}` !== 'false';
  }

  private _sticky: boolean = false;

  @HostBinding('style.display') display = 'block';
  @HostBinding('class.sticky-top') get stickyTop() { return this._sticky; };
  @ContentChild(TitleTemplateDirective) titleDirective?: TitleTemplateDirective;
}
