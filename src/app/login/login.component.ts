import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  username = '';
  password = '';

  ngOnInit() {
    const token = this.cookieService.get('access_token_cookie');
    if (token) {
      this.router.navigate(['/home']);
    }
  }

  onClickLogin() {
    this.loginService.onClickLogin(this.username, this.password).subscribe(
      (response) => {
        if (response && response.access_token) {
          const token = response.access_token;
          console.log('Token Obtained: ' + token);
          this.cookieService.set(
            'access_token_cookie',
            token,
            undefined,
            '/',
            undefined,
            true,
            'Strict'
          );
          this.router.navigate(['/home']);
        } else {
          console.log('Error');
          console.log('Username: ' + this.username);
          console.log('Password: ' + this.password);
        }
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }
}
