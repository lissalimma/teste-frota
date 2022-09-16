import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getList(num) {
    return this.http.get('http://localhost:8081/vehicles?page=' + num + '&limit=10')
  }

  deleteItens(plate) {
    return this.http.delete('http://localhost:8081/vehicles/' + plate)
  }

  save(form){
    return this.http.post('http://localhost:8081/vehicles', form )
  }

  getPlate(id){
    return this.http.get('http://localhost:8081/vehicles/' + id);
  }

  edit(params){
    return this.http.put('http://localhost:8081/vehicles/' + params.id, params);
  }
}
