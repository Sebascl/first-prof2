import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemaphoreComponent } from './semaphore/semaphore.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SemaphoreService } from './semaphore/semaphore.service';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AppComponent, SemaphoreComponent, CalcComponent, HomeComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SemaphoreService, CookieService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
