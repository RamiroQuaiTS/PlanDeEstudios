abstract class Generales {
    constructor(
        public nombre: string,
        public descri: string,
        protected feCrea: Date,
        protected crePor: number
        )
        {}

    public getFecha()
    {
        return this.feCrea.getFullYear()
    }

    public descripCompleta(){
        return this.nombre + "-" + this.descri
    }

    abstract guardar():void
}

class Producto extends Generales{

    constructor(
        public stock: number,
        public id: number,
        nombre:string,
        descri:string,
        feCrea:Date,
        crePor:number,
    ){
        super(nombre, descri, feCrea, crePor)
    }

    public override descripCompleta(): string {
        return "Este es un producto: " + super.descripCompleta()
    }

    obtenerFechaCreacion()
    {
        return super.feCrea        
    }

    obtenerCreadoPor()
    {
        return super.crePor        
    }

    guardar(): void {
        
    }
}

class Categoria extends Generales{
    public producto:Producto[] = []
    constructor(
        nombre:string,
        descri:string,
        feCrea:Date,
        crePor:number,
    ){
        super(nombre, descri, feCrea, crePor)
    }

    agregarProducto(prd:Producto)
    {
        this.producto.push(prd);
    }

    public override descripCompleta(): string {
        return "Este es una categoría: " + super.descripCompleta()
    }

    guardar(): void {
        
    }
}

let producto = new Producto(10,1,"Huawei","P30",new Date(),19734)
let producto2 = new Producto(122,1,"iPhone","12",new Date(),19734)
console.log(producto.getFecha())

let categori = new Categoria("Celular","Todos los equipos de celular,", new Date(),19734)
categori.agregarProducto(producto);
categori.agregarProducto(producto2);

console.log(producto)
console.log(categori)
console.log(producto.descripCompleta())
console.log(categori.descripCompleta())