import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PruebaInterceptor } from './shared/interceptors/prueba.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PruebaInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
