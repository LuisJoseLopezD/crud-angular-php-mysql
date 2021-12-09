import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// Necesitamos también un "observable", el cual nos ayuda a monitorear el HTML ante cualquier cambio
import { Observable } from 'rxjs';

// Necesitamos también el modelo para la estructura de los datos
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = "http://localhost/empleados";

  constructor(private clienteHttp:HttpClient) {  }

  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);
  }

}
