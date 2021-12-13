import { Component, OnInit } from '@angular/core';

// Para utilizar las rutas debemos importar la dependencia Rutas
import { Router, ActivatedRoute } from '@angular/router';

// Para recepcionar los datos debemos importar estas dos dependencias
import { FormGroup, FormBuilder } from '@angular/forms';

// Importamos el servicio
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  formularioDeEmpleado:FormGroup;

  elID:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) {
    // Recepcionando el id y asignandoselo a 'elID'
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.ObtenerEmpleado(this.elID).subscribe(
      respuesta => {
        console.log(respuesta);
        this.formularioDeEmpleado.setValue({
          nombre:respuesta[0]['nombre'],
          correo:respuesta[0]['correo']
        });
      }
    );

    this.formularioDeEmpleado=this.formulario.group(
      {
        nombre:[''],
        correo:['']
      }
    );

  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeEmpleado.value);
    this.crudService.EditarEmpleado(this.elID,this.formularioDeEmpleado.value).subscribe(()=>{

    });
    this.ruteador.navigateByUrl('/listar-empleado');
  }

}
