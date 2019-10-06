import { Component, forwardRef, Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputComponent),
      multi: true
    }
  ]
})
export class UiInputComponent implements ControlValueAccessor {
  @Input() type = 'text';
  @Input() label = '';
  @Input() placeholder = '';

  private _value = '';
  public isDisabled = false;

  get value() {
    return this._value;
  }

  set value(v) {
    if (v !== this._value) {
      this._value = v;
      this.handleChange(v);
    }
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {
    this.handleChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.handleTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (this.isDisabled !== isDisabled) {
      this.isDisabled = isDisabled;
    }
  }

  private handleTouched() {}
  private handleChange(value: any) {}
}
