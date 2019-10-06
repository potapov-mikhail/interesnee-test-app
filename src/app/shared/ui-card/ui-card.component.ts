import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss']
})
export class UiCardComponent {
  @ContentChild('header', { static: false }) header;
  @ContentChild('body', { static: false }) body;
}
