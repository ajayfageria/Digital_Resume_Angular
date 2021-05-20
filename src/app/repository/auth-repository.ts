import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {Users} from '../models/users';
import {Store} from '@ngrx/store';
import {LoginRequestAction, LoginSuccessAction, LogoutAction, UserProfileRequestAction, UserProfileSuccessAction, UserUpdateAction} from '../actions/user-actions';
import { ApiService } from '../services/apiService';
import { getUser, userLoggedIn,userLoggingIn } from '../reducers';
import { map, take } from 'rxjs/operators';
import { AuthUtils } from '../utility/auth-utils';


@Injectable()
export class AuthRepository{
constructor(private apiService: ApiService, private store: Store) {
}
login(data: { email: string, password: string }): Observable<Users> {
    this.store.dispatch(new LoginRequestAction());
    this.apiService.loginandsettoken(data).subscribe((res: any) => {
      this.store.dispatch(new LoginSuccessAction(res));
    });
    return this.store.select(getUser);
  }
  signup(data: {
    email: string, password: string, confirm_password: string,
    name: string, job_category: string, experience_level: string
  }): Observable<Users> {
    return this.apiService.signup(data);
  }
  sendResetPasswordEmail(data: { email: string }): Observable<any> {
    return this.apiService.sendPasswordResetEmail(data);
  }

  resetPassword(data: { code: string, new_password: string, confirm_password: string }): Observable<Users> {
    return this.apiService.resetPassword(data);
  }
  fetchMe(force = false): Observable<Users> {
    const loggedIn$ = this.store.select(userLoggedIn);
    const loggingIn$ = this.store.select(userLoggingIn);
    const user$ = this.store.select(getUser);
    combineLatest([loggedIn$, loggingIn$, user$]).pipe(take(1)).subscribe(data => {
      if (!data[0] && !data[1] || force) {
        this.store.dispatch(new UserProfileRequestAction());
        this.apiService.fetchMe().subscribe(user => {
          this.store.dispatch(new UserProfileSuccessAction(user));
        });
      }
    });
    return user$;
  }
  logout() {
      AuthUtils.removeToken();
        this.store.dispatch(new LogoutAction());
      }
      updateProfile(data: any) {
            const userProfile = {...data, ...{job_category: 'abc', experience_level: 'ads'}};
            return this.apiService.updateUserProfile(userProfile)
             .pipe(map((res: any) => {
              this.store.dispatch(new UserUpdateAction(res));
              }));
          }
          updatePassword(data: any) {
                return this.apiService.updatePassword(data);
             }
}