export class Detalles {
    id!: string
    detalles!: string
    item!: string
    guardado!: boolean
    set(dd: any){
    this.detalles = dd.detalles
    this.id = dd.id
    this.item = dd.item
    }
}
