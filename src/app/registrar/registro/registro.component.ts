
import { RegistroService } from 'src/app/Modulos/servicios/registro.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Registro } from 'src/app/Modulos/modelos/registro';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {
  public registro:Registro = new Registro


  constructor(private  RegistroService :RegistroService, public route:Router){}
 
  ngOnInit(): void {
    
  }
  onSave(){
this.RegistroService.Add(this.registro).subscribe(()=>{
  this.route.navigate(['/inicio'])
})
  }
}
