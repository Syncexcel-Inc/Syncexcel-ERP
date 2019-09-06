import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { ErrorService } from '../services/error.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/enterprises/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    redirectUrl: string;
    headers: Headers;

    constructor(private http: Http, private errorService: ErrorService) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }

    signUp(user: User) {
        const body = JSON.stringify(user);
        return this.http.post('http://localhost:5000/auth/signup', body, { headers: this.headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json);
                return Observable.throw(error.json());
            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        return this.http.post('http://localhost:5000/auth/signin', body, { headers: this.headers })
            .map((response: Response) =>  {
              return response.json();
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    login(): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }

    logout(): void {
        this.isLoggedIn = false;
    }

    isaValidUser(path) {
        return true;
        // if(!this.isLoggedIn){
        //   return false;
        // }
        // else{
        //   if(path=='/smartadmin/app-layouts' || path=='/enterprise/appview'){
        //     console.log(path);
        //     return true;
        //   }
        //   else{
        //     console.log(path + 'test service');
        //     return false;
        //   }
        // }
    }
}
