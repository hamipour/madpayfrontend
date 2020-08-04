import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          const appError = error.headers.get('App-Error');
          if (appError) {
            return throwError(appError);
          }
          const serverError = error.error.errors;
          let modelStateError = '';

          if (serverError && typeof serverError === 'object') {
            for (const key in serverError) {
              if (serverError[key]) {
                modelStateError += serverError[key] + '\n';
              }
            }
          }
          let myError = '';
          if (serverError) {
            const myServerError = error.error;

            if (myServerError && typeof myServerError === 'object') {
              if (myServerError.status === false) {
                myError = myServerError.message;
              }
            }
          }

          return throwError(
            modelStateError ||
              myError ||
              serverError ||
              'خطایی در برنامه پیش آمده است'
          );
        }
      })
    );
  }
}
