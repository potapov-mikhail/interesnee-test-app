import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../../models/user.model';


@Pipe({
  name: 'userFullName'
})
export class UserFullNamePipe implements PipeTransform {
  transform(user: User): string {
    return user ? `${user.lastName} ${user.firstName} ${user.secondName}` : '';
  }
}
