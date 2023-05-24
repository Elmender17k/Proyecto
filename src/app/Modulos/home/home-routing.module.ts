import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [

  {path:'',component: InicioComponent},
  {path:'agregar',component: ItemComponent},
  {path:'proyectos',component: ProyectosComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
