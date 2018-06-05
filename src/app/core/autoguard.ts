import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { LoginsService } from '../services/login/logins.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginsService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.loginService.isLoggedIn
      .take(1)
      .map((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
      });
  }
}
