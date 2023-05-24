import { InicioModule } from './Modulos/inicio/inicio.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  { path: '', loadChildren: ( ) => import( './Modulos/inicio/inicio.module').then(m =>m.InicioModule) },
  { path: 'inicio', loadChildren: ( ) => import( './Modulos/home/home.module').then(m =>m.HomeModule) },
  { path: 'registro', loadChildren: ( ) => import( './registrar/registrar.module').then(m =>m.RegistrarModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
