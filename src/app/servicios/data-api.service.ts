import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllColors() {
    const api_url = "https://reqres.in/api/colors/";
    return this.http.get(api_url);
  }
  getPage() {
    const api_url = "https://reqres.in/api/colors/?page=2";
    return this.http.get(api_url);
  }
}
