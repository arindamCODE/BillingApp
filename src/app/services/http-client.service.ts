import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Headers } from '@angular/http';


@Injectable()
export class HttpClientService {
  header: HttpHeaders;
  constructor(private http: HttpClient) {
    this.header = new HttpHeaders();
    this.header.append('Authorization', 'my-auth-token');
  }

  getData<T>(path: string, params: HttpParams) {
    return this.http.get(path, { headers: this.header, params: params }).
      map((response: HttpResponse<T>) => {
        const body = response || null;
        return body;
      }).catch(this.handleError);
  }

  // private extractData<T>(res: HttpResponse<T>): Observable<T> {
  //   const body = res.body || null;
  //   // return new Observable((observer) => {
  //   //   observer.next(body);
  //   //   observer.complete();
  //   // });
  //   return body;
  // }

  private handleError<T>(error: HttpResponse<T>): Observable<T> {
    let errMsg: string;
    errMsg = `${error.status} - ${error.statusText || ''}`;
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
