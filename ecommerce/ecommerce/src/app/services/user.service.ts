import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,HttpRequest } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { urlrest } from '../constants/global.constants';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = urlrest.API_ENDPOINTFINDUSERS;
  url2 = urlrest.API_ENDPOINTCREATEUSER;
  url3 = urlrest.API_ENDPOINTUPDATEUSER;
  url4 = urlrest.API_ENDPOINTFINDBYID;
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers':'X-Requested-With,content-type',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    })
  };

  crearUsuario(data: User): Observable<any>{
    return this.http.post(environment.apiUri + this.url2, JSON.stringify(data), this.httpOptions);
  }

  updateUser(token: any,user){
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers':'X-Requested-With,content-type',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Authorization' : 'Bearer ' + token
      })
    };
    return this.http.post(environment.apiUri+this.url3,JSON.stringify(user) ,httpOptions);
  }

  findAllUsers(token: any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers':'X-Requested-With,content-type',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Authorization' : 'Bearer ' + token
      })
    };
    return this.http.get(environment.apiUri+this.url, httpOptions);
  }

  findById(token: any, id){
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers':'X-Requested-With,content-type',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Authorization' : 'Bearer ' + token
      })
    };
    return this.http.get(environment.apiUri+this.url4+id, httpOptions);
  }


}
