import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class RouteGaurdGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private alert: ToastrService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.loggedIn()) {
      return true;
    } else {
      this.alert.error('برای ورود به این بخش باید احراز هویت شوید', 'خطا در ورود')
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url,
        },
      });
    }
  }
}
