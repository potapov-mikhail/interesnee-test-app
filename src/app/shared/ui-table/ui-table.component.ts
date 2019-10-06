import { Component, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss']
})
export class UiTableComponent {
  @Input() data: any[] = [];
  @ContentChild('th', { static: true }) public th;
  @ContentChild('tr', { static: true }) public tr;
}
