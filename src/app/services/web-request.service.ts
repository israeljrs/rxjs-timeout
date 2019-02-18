import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  constructor(public http: HttpClient) { }

  getArticle(): Observable<any> {
    // request com um delay de 2s.
    return this.http.get<any>('http://slowwly.robertomurray.co.uk/delay/2000/url/https://jsonplaceholder.typicode.com/todos/1')
    .pipe(
      // duração do timeout, 1s.
      timeout(1000)
    );
  }

}
