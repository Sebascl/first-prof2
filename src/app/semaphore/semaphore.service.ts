import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SemaphoreService {

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  private url = environment.url;
  token = this.cookieService.get('access_token_cookie');
  
  checkBox1True(inputValue:number){
    const apiUrl = this.url + 'sequencetime';
      const data = { freq : inputValue}
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      });
      this.http.post(apiUrl, data, { headers }).subscribe(
        (response) => {
          console.log('Solicitud POST exitosa:', response);
        },
        (error) => {
          console.error('Error en la solicitud POST:', error);
        }
      );
  }
  checkBox2True(inputValue:number){
    const apiUrl = this.url+'secondsequencetime';
      const data = { freq : inputValue}
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      });
      this.http.post(apiUrl, data, { headers }).subscribe(
        (response) => {
          console.log('Solicitud POST exitosa:', response);
        },
        (error) => {
          console.error('Error en la solicitud POST:', error);
        }
      );
  }

  onClickDetenerSemaforos() {
    const apiUrl = this.url + 'semaphorebuttons';
    const data = { state : 0 };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    this.http.post(apiUrl, data, { headers }).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa:', response);
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
      }
    );
  }
  onClickIniciarSemaforos() {
    console.log(this.token)
    const apiUrl = this.url + 'semaphorebuttons';
    const data = { state : 1 };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    this.http.post(apiUrl, data, { headers }).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa:', response);
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
      }
    );
  }
  onClickSecondSemaforo() {
    const apiUrl = this.url + 'semaphorebuttons';
    const data = { state: 2 };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    this.http.post(apiUrl, data, { headers }).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa:', response);
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
      }
    );
  }
  onClickThirdSemaforo() {
    const apiUrl = this.url + 'semaphorebuttons';
    const data = { state: 3 };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    this.http.post(apiUrl, data, { headers }).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa:', response);
      },
      (error) => {
        console.error('Error en la solicitud POST:', error);
      }
    );
  }
}
