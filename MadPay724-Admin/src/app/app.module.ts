import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorHandlingInterceptor } from './errorHandling/error-handling-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginModule } from './login/login.module';
import { PanelModule } from './panel/panel.module';
import { AuthModule } from './auth/auth.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteGaurdGuard } from './routeGuard/route-gaurd.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    AuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation : 'decreasing',
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true},
    RouteGaurdGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
