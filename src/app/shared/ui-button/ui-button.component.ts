import { Component, Input } from '@angular/core';

type controlType = 'submit' | 'button';
type btnType = 'primary';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent {
  @Input() type: controlType = 'button';
  @Input() pending = false;
  @Input('btnType') set setBtnType(value: btnType) {
    if (value) {
      this.btnClassName = `btn btn-${value}`;
    }
  }

  public btnClassName = 'btn btn-primary';
}
