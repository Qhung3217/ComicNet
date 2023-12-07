import { HttpStatusCode } from '@angular/common/http';
export interface ErrorMessage {
  errorCode: HttpStatusCode;
  message: string;
  moreInfor?: string;
}
