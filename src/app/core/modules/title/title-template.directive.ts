import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTitleTemplate]'
})
export class TitleTemplateDirective {
  constructor(public templateRef: TemplateRef<unknown>) { }
}
