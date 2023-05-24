import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../modelos/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }

Add(add: Registro ){

   return this.http.post('http://localhost:3000/registro', add)

}
load(){
  return this.http.get('http://localhost:3000/registro')
}


}

