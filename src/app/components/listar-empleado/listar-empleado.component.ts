import { Component, OnInit } from '@angular/core';

// Importamos el servicio para utilizarlo
import { CrudService } from 'src/app/service/crud.service';

// TENEMOS QUE IMPORTAR LO QUE VAMOS A UTILIZAR Y LUEGO DECLARARLO EN EL CONSTRUCTOR

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  Empleados:any

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.ObtenerEmpleados().subscribe(respuesta=>{
      console.log(respuesta);
      this.Empleados=respuesta;
    })
  }

}
