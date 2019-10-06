import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

interface ErrorMessage {
  name: string;
  message: string;
}

@Component({
  selector: 'ui-validation-error-message',
  templateUrl: './ui-validation-error-message.component.html',
  styleUrls: ['./ui-validation-error-message.component.scss']
})
export class UiValidationErrorMessageComponent {
  @Input() control: AbstractControl;
  messages: ErrorMessage[] = [
    {
      name: 'required',
      message: 'The field cannot be empty'
    },
    {
      name: 'email',
      message: 'Invalid email'
    },
    {
      name: 'minlength',
      message: 'Min length'
    }
  ];
}
