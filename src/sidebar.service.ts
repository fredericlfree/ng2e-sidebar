import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers } from '@angular/http';

import { SidebarMenu } from './sidebar-menu';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class SidebarService {

    private sidebarUrl: string;
    private headers: Headers;

    constructor(private http: Http) {

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.sidebarUrl = ' http://localhost:4200/';
    }

    getSidebarMenu(id: number): Observable<SidebarMenu> {
        console.log('getting sidebar: ' + id);

        return this.http.get(this.sidebarUrl + 'sidebar' + id + '.json')
            .map((response: Response) => response.json() as SidebarMenu);
        //    .do(data => console.log('All: ' + JSON.stringify(data)));
    }
}
