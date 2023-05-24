export class Items {
    public id!: number
    public titulo!: string
    set(data: any){
        this.id = data.id
        this.titulo = data.titulo
    }
}
