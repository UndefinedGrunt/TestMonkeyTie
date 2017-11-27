import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {UserService} from '../user.service';
import User from '../User';


@Component({
  selector: 'app-root',
  templateUrl: './userDetails.component.html',
  styleUrls: ['./userDetails.component.scss']
})
export class UserDetailsComponent {

  public user: User;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,) {
    const userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    userService.getUserDetails(userId).subscribe(
      user => this.user = user
    );
  }

}
