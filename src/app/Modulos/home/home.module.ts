import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CabezaComponent } from './cabeza/cabeza.component';
import { InicioComponent } from './inicio/inicio.component';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';





@NgModule({
  declarations: [
    CabezaComponent,
    InicioComponent,
    ItemsComponent,
    ItemComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  ]
})
export class HomeModule { }