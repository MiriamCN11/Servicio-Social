import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Servicio Social';

   //objeto de Datos
   objectDatos = {
    name:'Miriam ',
    apellidoP:'Castañeda',
    apellidoM: 'Noriega',
    edad: '22',
    email: 'mncn110599@hotmail.com',
    telefono: '3318765385'
  }

  /**ARREGLO DE OBJETOS*/
  employees = [
    {name: Text,
    apellidoP: Text,
    apellidoM: Text,
    edad: Number,
    email: EmailValidator,
    telefono: Number},
  ];

  //MODELO PARA ACTUALIZAR DATOS
  model:any = {};

  //METODO PARA AGREGAR EMPLEADO
  addEmployee():void{
    this.employees.push(this.model);
  }
  //METODO PARA ELIMINAR EMPLEADO
  deleteEmployee():void{

  }
  //METODO PARA EDITAR EMPLEADO
  editEmployee():void{

  }
  //METODO PARA ACTUALIZAR DATOS EN EL ARREGLO DE OBJETOS
  updateEmployee():void{

  }
}
