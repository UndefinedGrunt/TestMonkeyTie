import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../user.service';
import User from '../User';

@Component({
  selector: 'app-root',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.scss']
})
export class UserListComponent {
  public userList: [User];

  constructor(private router: Router, private userService: UserService) {
    userService.getUserList().subscribe(
      userlist => this.userList = userlist
    );
  }

  onSelect(user: User) {
    this.router.navigate(['/user'])
  }
}
