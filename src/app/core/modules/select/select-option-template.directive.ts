import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appSelectOptionTemplate]'
})
export class SelectOptionTemplateDirective {
  constructor(public templateRef: TemplateRef<any>) { }
}
