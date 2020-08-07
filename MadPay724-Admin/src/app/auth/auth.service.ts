import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

interface LoginCredentials {
  username: string;
  password: string;
  rememberMe: boolean;
}
interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:25865/site/admin/auth/';
   jwtHelper = new JwtHelperService();

  constructor(private httpClietn: HttpClient) {}

  login(model: LoginCredentials) {
    return this.httpClietn.post(this.baseUrl + 'login', model).pipe(
      map((res: any) => {
        const user = res;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  signup(model: SignupCredentials) {
    return this.httpClietn.post(this.baseUrl + 'signup', model).pipe(
      map((res: any) => {
        const user = res;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
