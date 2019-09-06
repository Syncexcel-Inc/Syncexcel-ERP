import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import settings from '../../app.config.json';

@Injectable()
export class AppConfigService {
    public jsonObj: any;
    public actionURL: string;

    constructor(private http: HttpClient) {
        this.jsonObj = settings;
    }

    public getActionUrl(): Observable<any> {
        if (this.jsonObj != null) {
            return this.jsonObj[0].server + this.jsonObj[0].apiUrl;
        }
    }
}
