import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { ColorInterface } from '../models/color-interface';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getAllColors(){
    const api_url = "https://reqres.in/api/colors/";
    return this.http.get(api_url);
  }

}
