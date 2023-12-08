import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorMessage } from '../../interfaces/error-message.interface';
import { ErrorService } from '../../services/error/error.service';

@Injectable()
export class CatchErrorInterceptor implements HttpInterceptor {
  constructor(private errorService: ErrorService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorResponse: ErrorMessage = this.handleError(error);
        this.errorService.setError(errorResponse);
        this.errorService.redirectToErrorPage();
        return throwError(() => error);
      })
    );
  }

  private handleError(errRes: HttpErrorResponse) {
    let errorMessage: ErrorMessage = {
      errorCode: errRes.status,
      message: 'An unknown error occurred',
    };
    if (!errRes.error && !errRes.error?.error) return errorMessage;
    switch (errRes.error.status) {
      case 500:
        if (errRes.error.message == 'Maximum number of redirects exceeded') {
          errorMessage.errorCode = 404;
          errorMessage.message = 'Không tìm thấy truyện.';
          break;
        }
        errorMessage.message = '500 Internal Server Error';
        errorMessage.moreInfor = errRes.error.message;
        break;
      case 503:
        errorMessage.message = '503 Internal Server';
        break;
      case 404:
        errorMessage.message = '404 Not Found';
        break;
      case 403:
        errorMessage.message = errRes.error.message;
        break;
      case 400:
        errorMessage.message = errRes.error.message;
        break;
      case 401:
        errorMessage.message = errRes.error.message;
        break;
      case 412:
        errorMessage.message = errRes.error.message;
        break;
      default:
        errorMessage.message = errRes.statusText;
        break;
    }

    return errorMessage;
  }
}
