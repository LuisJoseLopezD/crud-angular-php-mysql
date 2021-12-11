import { Component, OnInit } from '@angular/core';

// Para recepcionar los datos debemos importar estas dos dependencias
import { FormGroup, FormBuilder } from '@angular/forms';

// Importamos el servicio
import { CrudService } from 'src/app/service/crud.service';

// Utilizando las rutas para realizar redirección
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  formularioaDeEmpleados:FormGroup;

  // private crudService: es declarar el servicio para utilizarlo
  // También debemos declarar las rutas en el constructor
  // private de privado, ruteador de un nombre cualquier y Router que es el nombre propio de angular

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ) {
    this.formularioaDeEmpleados = this.formulario.group({
      nombre:[''],
      correo:['']
    })
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log("hola mundo");
    console.log(this.formularioaDeEmpleados.value);
    this.crudService.AgregarEmpleado(this.formularioaDeEmpleados.value).subscribe();
    this.ruteador.navigateByUrl('/listar-empleado');
  }

}
