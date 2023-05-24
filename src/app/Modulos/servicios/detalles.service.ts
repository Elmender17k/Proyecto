import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detalles } from '../modelos/detalles';

@Injectable({
  providedIn: 'root'
})
export class DetallesService {

  constructor(private http: HttpClient) { }
  load(){
    return this.http.get('http://localhost:3000/detalle')
  }
  Add(add: Detalles ){

    return this.http.post('http://localhost:3000/detalle', add)
}

}