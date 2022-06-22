import { Component, ContentChild, forwardRef, HostBinding, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOptionTemplateDirective } from './select-option-template.directive';

@Component({
  selector: 'sw-select',
  template: `
    <button type="button" class="btn hstack gap-2" [ngClass]="cssClass ?? ''" (click)="optionsOpen = !optionsOpen"
        cdkOverlayOrigin #trigger="cdkOverlayOrigin">
        {{text}}
        <i class="fa-solid fa-angle-down text-secondary"></i>
    </button>
    <ng-template cdkConnectedOverlay [cdkConnectedOverlayOrigin]="trigger" [cdkConnectedOverlayOpen]="optionsOpen"
        [cdkConnectedOverlayMinWidth]="240" (overlayOutsideClick)="optionsOpen = false">
        <div class="card w-100 border-0 shadow-dropdown mh">
            <div class="list-group list-group-flush overflow-auto">
                <button *ngFor="let d of data" type="button"
                    class="list-group-item list-group-item-action hstack align-items-center gap-2"
                    (click)="select(valueField ? d[valueField] : d)">
                    <div style="width: 14px">
                        <i *ngIf="(valueField ? d[valueField] : d) === selectedValue" class="fa-solid fa-check"></i>
                    </div>
                    <ng-container *ngIf="!templateDir">{{d[textField!] ?? d}}</ng-container>
                    <ng-container *ngTemplateOutlet="templateDir?.templateRef || null; context: {$implicit: d}">
                    </ng-container>
                </button>
            </div>
        </div>
    </ng-template>
  `,
  styles: [
    `
      .mh {
        max-height: 400px;
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    }
  ]
})
export class SelectComponent {
  @Input() data?: any[] | null;
  @Input() valueField?: string;
  @Input() textField?: string;
  @Input() emptyValue?: string;
  @Input() cssClass?: string | string[] | Set<string> | { [klass: string]: any };
  @ContentChild(SelectOptionTemplateDirective) templateDir?: SelectOptionTemplateDirective;
  @HostBinding('style.display') display = 'block';

  optionsOpen: boolean = false;
  selectedValue: any;
  touched: boolean = false;
  disabled: boolean = false;

  onChange: (value: any) => void = () => { };

  onTouched: () => void = () => { };

  get text() {
    const text = (this.data ?? []).find(d => (this.valueField ? d[this.valueField] : d) === this.selectedValue);

    if (text && this.textField) {
      return text[this.textField];
    } else {
      return text ?? this.emptyValue;
    }
  }

  writeValue(value: any): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  select(value: any) {
    if (this.selectedValue !== value) {
      this.selectedValue = value;
      this.onChange(value);
    }
    this.optionsOpen = false;
  }
}
