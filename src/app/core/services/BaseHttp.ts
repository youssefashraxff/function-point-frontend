import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseHttp {
  protected readonly http = inject(HttpClient);

  protected post<T>(url: string, body: {}): Observable<T> {
    return this.http.post<T>(url, body);
  }
  protected get<T>(url: string, body?: {}): Observable<T> {
    return this.http.get<T>(url, body);
  }
}
