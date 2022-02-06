import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private notification: ToastrService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError(error => this.errorHandler(error)));
  }


  private errorHandler(
    response: HttpErrorResponse
  ): Observable<HttpEvent<any>> {

    if (response.status === 400) {
      this.notification.error(response.error.message, 'ERROR: 400');
    }

    if (response.status === 504) {
      this.notification.error(response.error.message, 'ERROR: 500');
    }
    if (response.status === 500) {
      this.notification.error(response.error.message, 'ERROR: 500');
    }

    throw response;
  }
}

