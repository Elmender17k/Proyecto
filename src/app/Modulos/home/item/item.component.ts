import { DetallesService } from '../../servicios/detalles.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../servicios/item.service';
import { Items } from '../../modelos/item';
import { Detalles } from '../../modelos/detalles';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit{
  public item: Items = new Items
  
  constructor(
    private ItemService:ItemService,
     public route:Router, 
     ){

  }
  ngOnInit() {
    
  }
  OnSave(){
 this.ItemService.Add(this.item).subscribe(()=>{

  this.route.navigate(['/inicio'])
 })
  }

}
