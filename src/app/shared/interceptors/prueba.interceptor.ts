import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PruebaInterceptor implements HttpInterceptor {

  constructor() {
    // Deberia mostrar este console
    console.log('prueba');
   }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Deberia mostrar este console
    console.log('intercept');
    request = request.clone({
      setHeaders: {
        // 'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        // responseType: 'ms-stream',
      }
    });

    return next.handle(request);
  }
}
