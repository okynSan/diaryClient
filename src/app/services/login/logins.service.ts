import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Baseservice } from '../baseservice';
import { Http, Connection } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Md5 } from "md5-typescript";
import { User } from '../../models/user/user';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class LoginsService extends Baseservice {

  private loggedIn = new BehaviorSubject<boolean>(false);
  conection: string = "localhost:8080/";

  constructor(private router: Router,
                      http: Http
  ) {
    super(http);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  setLoggedIn(isLogedIn: boolean) {
    this.loggedIn.next(isLogedIn);
  }

  login(user: User): Observable<any> {

    let url = this.conection + "user/getLogin"
    if (user.$name != '' && user.$password != '') {
      user.$password = Md5.init(user.$password);
      let bodyString = JSON.stringify(user);

      return this.callPOSTMethod(url, user);
    }
  }

  // getUserInfo(userName: string): Observable<any> {
  //   let url = this.conection + "login/LoginService.svc/GetUserInfoByName?userName="
  //   return this.http.get(url.concat(userName), this.getOptionsGet())
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

  logout() {
    // localStorage.removeItem("userInfo");
    this.loggedIn.next(false);
    this.router.navigate(['login'], { skipLocationChange: false });
  }

}
