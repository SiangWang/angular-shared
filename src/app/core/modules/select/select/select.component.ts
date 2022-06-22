import { Component, ContentChild, forwardRef, HostBinding, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOptionTemplateDirective } from '../select-option-template.directive';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
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
