import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  urlRoot = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  queryJsonpList() {
    const url = this.urlRoot + 'authCode';
    return this.http.jsonp<any>(url, 'callback').pipe(timeout(15000),catchError((error) => this.handleSomeError(error)));
  }

  private handleSomeError(error: any) {
    if (error.error instanceof ErrorEvent) {
      console.log(' error occurred:', error.error.message);
    } else {
      console.log(`${error.status}-${error.statusText}`);
    }
    return throwError(new Error('Server Error!'));
  }
}
