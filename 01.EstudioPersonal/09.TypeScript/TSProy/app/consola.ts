class Consola {
    nombre:string="Play Station 5";
    empresa:string;
    anio:number;

    constructor(public _color:string, _nombre:string, _empresa:string, _anio:number){
        this._color = _color;
        this.nombre = _nombre;
        this.empresa = _empresa;
        this.anio = _anio;
    }
}

let consola = new Consola("gris","Play Station 4", "Sony", 1990);
console.log(consola);