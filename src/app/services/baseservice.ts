import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { RequestOptionsArgs, Headers, Http, RequestOptions } from '@angular/http';
import { Response } from '@angular/http';

export class Baseservice {
    constructor(private _http: Http
    ) {
    }

    public getOptionsGet(): RequestOptions {
        let headers = new Headers();
        headers.append('Content-Type', 'text/plain');

        let options = new RequestOptions({ headers: headers });
        return options;
    }

    public getOptionsPost(): RequestOptions {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        return options;
    }

    extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    public handleError(error: any) {
        let errMsg: string;
        let body: string;

        if (error.status === 500) {
            return Observable.throw(new Error(error._body));
        }
        else if (error.status === 400) {
            return Observable.throw(new Error(error.status));
        }
        else if (error.status === 409) {
            return Observable.throw(new Error(error.status));
        }
        else if (error.status === 404) {
            return Observable.throw(new Error(error.status));
        } else {
            return Observable.throw(new Error(error._body));
        }

    }

    callGetMethod(url: string): Observable<any> {
        return this._http.get(url, this.getOptionsGet())
            .map(this.extractData)
            .catch(this.handleError);
    }

    callPOSTMethod(url: string, body: any): Observable<any> {
        return this._http.post(url, JSON.stringify(body), this.getOptionsPost())
            .map(this.extractData)
            .catch(this.handleError);
    }

}
