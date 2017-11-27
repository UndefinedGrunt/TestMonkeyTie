import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import User from "./User";

@Injectable()
export class UserService {
  userList = (<any>window).userList;

  getUserList(): Observable<[User]> {
    return of(this.userList);
  }

  getUserDetails(userId: number): Observable<User> {
    return of(this.userList.find(user => user.id === userId));
  }

}
