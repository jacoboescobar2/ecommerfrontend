import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { urlrest } from '../constants/global.constants';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {


  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  log = this.loggedIn.asObservable();

  url = urlrest.API_ENDPOINTLOGIN;

    constructor(private http: HttpClient) { 
    this.loggedIn.next(JSON.parse(localStorage.getItem('Logeado')));
  }

  changeValue() {
    this.loggedIn.next(!this.loggedIn.value);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers':'X-Requested-With,content-type',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    })
  };


  /*login(username, password): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post(environment.apiUri + this.url,
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
      }
    );
  }*/

  login(credentials): Observable<any>{
    return this.http.post(environment.apiUri + this.url,{
      username: credentials.usuario,
      password: credentials.contrasenia
    }, this.httpOptions);
  }


}
