import { HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorMessage } from '../../interfaces/error-message.interface';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  errorCode: HttpStatusCode = 404;
  message: string = '';
  moreInfor?: string;
  constructor(private router: Router) {}
  setError(errorResponse: ErrorMessage) {
    this.errorCode = errorResponse.errorCode;
    this.message = errorResponse.message;
    this.moreInfor = errorResponse.moreInfor;
  }
  removeError() {
    this.errorCode = 404;
    this.message = '';
    this.moreInfor = '';
  }
  redirectToErrorPage() {
    if (this.router.url != '/error') {
      this.router.navigate(['/error'], {
        queryParams: {
          type: 'other',
        },
      });
    }
  }
}
