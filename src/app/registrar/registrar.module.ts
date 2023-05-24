import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarRoutingModule } from './registrar-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { ProyectosComponent } from '../Modulos/home/proyectos/proyectos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistroComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    RegistrarRoutingModule,
    FormsModule
  ]
})
export class RegistrarModule { }
