import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UiCardComponent } from './ui-card/ui-card.component';
import { UiTableComponent } from './ui-table/ui-table.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiValidationErrorMessageComponent } from './ui-validation-error-message/ui-validation-error-message.component';
import { UiAlertComponent } from './ui-alert/ui-alert.component';
import {UserFullNamePipe} from './pipes/user-full-name.pipe';


@NgModule({
  declarations: [
    UiCardComponent,
    UiTableComponent,
    UiInputComponent,
    UiButtonComponent,
    UiValidationErrorMessageComponent,
    UiAlertComponent,
    UserFullNamePipe
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    UserFullNamePipe,
    UiCardComponent,
    UiInputComponent,
    UiTableComponent,
    UiButtonComponent,
    UiValidationErrorMessageComponent,
    UiAlertComponent
  ]
})
export class SharedModule {}
