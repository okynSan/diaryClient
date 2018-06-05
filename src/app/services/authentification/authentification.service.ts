import { Injectable } from '@angular/core';
import { Baseservice } from '../baseservice';
import { Http } from '@angular/http';
import {Observable } from 'rxjs/Observable';

@Injectable()
export class AuthentificationService extends Baseservice {

  conection: string = "http://localhost:8080/";

  constructor(http: Http) {
    super(http);
   }

   attemptAuth(username: string, password: string): Observable<any> {
    const credentials = {username: username, password: password};
    console.log('attempAuth ::');
    return this.callPOSTMethod(this.conection + 'rest/login', credentials);
  }

}
