import { RegistroService } from '../servicios/registro.service';
import { Component, OnInit } from '@angular/core';
import { Registro } from '../modelos/registro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.sass']
})
export class ProyectosComponent implements OnInit{

public registro: Registro[]=[]

constructor(private RegistroService:RegistroService,public route:Router){

}


  ngOnInit(): void {
    this.RegistroService.load().subscribe((res: any)=>{
      res.forEach((element:any)=>{
        let temp = new Registro()
        temp.set(element)
        this.registro.push(temp)
      })
        
      });

  }
  volver(){
    this.route.navigate(['/inicio'])
  }

}
