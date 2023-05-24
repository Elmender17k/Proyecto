import { DetallesService } from '../../servicios/detalles.service';
import { Items } from '../../modelos/item';
import { ItemService } from "../../servicios/item.service";
import { Component, OnInit } from '@angular/core';
import { Detalles } from '../../modelos/detalles';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})




export class ItemsComponent implements OnInit{
 
public items: Items[]=[]
public detalles: Detalles = new Detalles


  constructor(private ItemService: ItemService, private DetallesService: DetallesService){
   
 


}
  ngOnInit(){
    this.ItemService.load().subscribe((res: any)=>{
      res.forEach((element:any)=>{
        let temp = new Items()
        temp.set(element)
        this.items.push(temp)
      })
        
      });

  }
  OnSave(){
    this.DetallesService.Add(this.detalles).subscribe(()=>{
      this.detalles.guardado = true;
     
    })
     }
     LLenar(item:Items){
      this.detalles.item = item.titulo
     }
     Eliminar(item: Items): void {
    
    }
}
