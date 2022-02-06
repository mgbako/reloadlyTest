import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService<M> {

  constructor(public httpClient: HttpClient) {
  }
  protected sendGet(url: any, options?: any): Observable<M> {
    return this.httpClient.get(url, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  protected sendPost(url: any, payload: any, options?: any): Observable<M> {
    return this.httpClient.post(url, payload, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  protected sendPatch(
    url: any,
    payload?: any,
    options?: any
  ): Observable<M> {
    
    return this.httpClient.patch(url, payload, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  protected sendPut(url: any, payload?: any, options?: any): Observable<M> {
    return this.httpClient.put(url, payload, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  protected sendDelete(url: any, options?: any): Observable<M> {
    return this.httpClient.delete(url, options).pipe(
      map((body: any) => body),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.message}`, error
      );
    }
    // return an observable with a user-facing error message
    return throwError(
      JSON.stringify({
        name: error.name,
        status: error.status,
        message: error.message,
        error: error.error,
        errors: error
      })
    );
  }
}
