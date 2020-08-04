import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorHandlingInterceptor } from './errorHandling/error-handling-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginModule } from './login/login.module';
import { PanelModule } from './panel/panel.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    AuthModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
