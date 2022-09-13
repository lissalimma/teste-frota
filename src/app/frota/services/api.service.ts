import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get('http://localhost:8081/Vehicles')
  }

  deleteItens(plate) {
    return this.http.delete('http://localhost:8081/Vehicles/' + plate)
  }

  save(form){
    return this.http.post('http://localhost:8081/Vehicles', form )
  }
}
