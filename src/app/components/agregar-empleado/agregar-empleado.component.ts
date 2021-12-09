import { Component, OnInit } from '@angular/core';

// Para recepcionar los datos debemos importar estas dos dependencias
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  formularioaDeEmpleados:FormGroup;

  constructor(public formulario:FormBuilder) {
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
  }

}
