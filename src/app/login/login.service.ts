import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  private url = environment.url;

  onClickLogin(username:string, password:string): Observable<any>{
    const url = this.url + 'login'
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    const body = {
      username: username,
      password: password
    }
    return this.http.post(url, body, {headers})
  }

}
