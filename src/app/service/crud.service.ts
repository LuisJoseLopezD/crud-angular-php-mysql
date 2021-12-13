import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// Necesitamos también un "observable", el cual nos ayuda a monitorear el HTML ante cualquier cambio
import { Observable } from 'rxjs';

// Necesitamos también el modelo para la estructura de los datos
import { Empleado } from './Empleado';
import { AttributeMarker } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = "http://localhost/empleados/"; // API de PHP, EXPRESS, GO, PYTHON

  constructor(private clienteHttp:HttpClient) {  }

  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);
  }

  BorrarEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar=1"+id);
  }

  ObtenerEmpleados(){
    return this.clienteHttp.get(this.API);
  }
  
  // Obtener empleado para consultar
  ObtenerEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }

  EditarEmpleado(id:any,datosEmpleado:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosEmpleado);
  }

}

// En esta parte fue donde nos conectamos con la API con el archivo de php