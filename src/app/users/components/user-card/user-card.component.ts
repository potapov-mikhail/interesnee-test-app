import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { User } from '../../../models/user.model';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {
  @Input() public user: User;
}
