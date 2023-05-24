import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Items } from '../modelos/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

Add(add: Items ){

   return this.http.post('http://localhost:3000/titulo', add)

}
load(){
  return this.http.get('http://localhost:3000/titulo')
}
delate( ){

  return this.http.delete('http://localhost:3000/detalle')
}

}

