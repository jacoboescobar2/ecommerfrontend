import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,HttpRequest } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { urlrest } from '../constants/global.constants';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = urlrest.API_ENDPOINTCREATEPRODUCT;
  url2 = urlrest.API_ENDPOINTFINDALLPRODUCT;
  url3 = urlrest.API_ENDPOINTFINDBYIDPRODUCT;
  url4 = urlrest.API_ENDPOINTDELETEPROD;

  constructor(private http: HttpClient) { }

  createProduct(token: any,product){
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers':'X-Requested-With,content-type',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Authorization' : 'Bearer ' + token
      })
    };
    return this.http.post(environment.apiUri+this.url,JSON.stringify(product) ,httpOptions);
  }

  deleteProduct(token: any,product){
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers':'X-Requested-With,content-type',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Authorization' : 'Bearer ' + token
      })
    };
    return this.http.post(environment.apiUri+this.url4,JSON.stringify(product) ,httpOptions);
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
    return this.http.get(environment.apiUri+this.url3+id, httpOptions);
  }

  findAllProducts(token: any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers':'X-Requested-With,content-type',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Authorization' : 'Bearer ' + token
      })
    };
    return this.http.get(environment.apiUri+this.url2, httpOptions);
  }

}
