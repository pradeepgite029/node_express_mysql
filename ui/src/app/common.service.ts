import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  getusers() {
    const dataUrl: string = 'http://localhost:3000/user';
    let data = this.http.get(dataUrl, {headers: {"value1": "value1"}});
    return data;
  }
}
