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

  url = urlrest.API_ENDPOINTLOGIN;

    constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers':'X-Requested-With,content-type',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    })
  };

  login(credentials): Observable<any>{
    return this.http.post(environment.apiUri + this.url,{
      username: credentials.usuario,
      password: credentials.contrasenia
    }, this.httpOptions);
  }

}
