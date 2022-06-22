import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[swSelectOptionTemplate]'
})
export class SelectOptionTemplateDirective {
  constructor(public templateRef: TemplateRef<any>) { }
}
