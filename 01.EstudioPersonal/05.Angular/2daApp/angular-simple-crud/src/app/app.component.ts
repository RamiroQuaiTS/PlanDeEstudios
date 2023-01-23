import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Empleado } from './models/empleado'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    empleadoArreglo: Empleado[] = [
    {id: 1, name:"Ramiro", country:"Mexico"},
    {id: 2, name:"Mayra", country:"Mexico"},
    {id: 3, name:"Diego", country:"Mexico"}
  ];

  seleccionaEmpleado: Empleado = new Empleado();

  AgregarEditar(){
    if (this.seleccionaEmpleado.id === 0) {
      this.seleccionaEmpleado.id = this.empleadoArreglo.length + 1;
      this.empleadoArreglo.push(this.seleccionaEmpleado);
    }
    this.seleccionaEmpleado = new Empleado();  
    
  }

  AbrirEditar(empleado: Empleado){
    this.seleccionaEmpleado = empleado;
  }

  Borrar(){
    if (confirm("Seguro que deseas borrar al usuario")) {
      this.empleadoArreglo = this.empleadoArreglo.filter(x => x != this.seleccionaEmpleado)
      this.seleccionaEmpleado = new Empleado(); 
    }
  }

}
