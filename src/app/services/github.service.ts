import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserComponent } from '../components/user/user.component';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private _userSource = new BehaviorSubject<User>({});
  private _user: Observable<User> = this._userSource.asObservable();

  set user(user: User) {
    this._userSource.next(user);
  }
  // :Observable<User>
  get user() {
    return this._user as User;
  }

  constructor(private http: HttpClient) {
    this.setUser();
  }

  private setUser(): void {
    this.http.get<User>('https://api.github.com/users/janatbek').subscribe((user) => {
      this.user = user;
    });
  }
}
