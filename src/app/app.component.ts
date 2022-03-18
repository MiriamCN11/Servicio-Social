import { Component } from '@angular/core';

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
    {name: 'Nataly',
    apellidoP: 'Castañeda',
    apellidoM: 'Noriega',
    edad: '22',
    email: 'noriegam45@gmail.com',
    telefono: '3318765385'},

    {name: 'Paulina',
    apellidoP: 'Castañeda',
    apellidoM: 'Noriega',
    edad: '18',
    email: 'paulinac@gmail.com',
    telefono: '3325964968'},

    {name: 'Luis',
    apellidoP: 'Ortega',
    apellidoM: 'Medina',
    edad: '25',
    email: 'ortegali@gmail.com',
    telefono: '3314408001'}
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
