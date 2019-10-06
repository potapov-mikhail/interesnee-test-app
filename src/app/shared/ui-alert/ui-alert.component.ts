import { Observable } from 'rxjs';
import { Component } from '@angular/core';

import { UiAlertMessage, UiAlertService } from './ui-alert.service';


@Component({
  selector: 'ui-alert',
  templateUrl: './ui-alert.component.html',
  styleUrls: ['./ui-alert.component.scss']
})
export class UiAlertComponent {
  message$: Observable<UiAlertMessage>;

  constructor(private service: UiAlertService) {
    this.message$ = this.service.message$;
  }
}
