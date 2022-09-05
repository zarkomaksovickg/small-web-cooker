import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': environment.xRapidapiKey,
      'x-rapidapi-host': environment.xRapidapiHost,
      'useQueryString': 'true'
    })
    const clonedRequest = request.clone({headers});
    return next.handle(clonedRequest);
  }
}
