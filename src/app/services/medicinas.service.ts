import { Injectable } from '@angular/core';
import { Medicina } from '../types/catalogos.interface';
import { ACTUALIZADO_EXITO, CREADO_EXITO, ELIMINADO_EXITO, NO_ENCONTRADO } from '../helpers/mensajes';
import { Response } from '../types/response.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicinasService {

  medicinas : Medicina[] = [];

  constructor() { }

  getById(id:number){
    const medicina = this.medicinas.find((med)=>med.id == id);
    return medicina;
  }

  getMedicinas() : Medicina[]{
    return this.medicinas;
  }

  getActivos() : Medicina[]{
    const medicinas = this.medicinas.filter(med=>med.estado == true);
    return medicinas;
  }

  getInactivos() : Medicina[]{
    const medicinas = this.medicinas.filter(med=>med.estado == false);
    return medicinas;
  }

  getByDescripcion(descripcion : string) : Medicina[]{
    const medicinas = this.medicinas.filter((med)=>med.descripcion.includes(descripcion));
    return medicinas;
  }

  eliminar(med: Medicina){
    
    let medicina = this.getById(med.id);

    if(!medicina){
      return {
        estado : 'error',
        mensaje : NO_ENCONTRADO('Medicina',', No se puede eliminar'),
        data : null
      }
    }

    if(medicina.id !== null){
      this.medicinas.splice(((med.id || 1) -1),1);
    }

    return {
      estado : 'ok',
      mensaje : ELIMINADO_EXITO('Medicina',''),
      data : null
    }
  }

  agregarMedicina(medicina : Medicina) : Response{

    medicina.id = this.medicinas.length+1;
    this.medicinas.push(medicina);

    return {
      estado : 'ok',
      mensaje : CREADO_EXITO('Catálogo',''),
      data : medicina
    }
  }

  editarMedicina(medicina : Medicina) : Response{
    
    let found = this.getById(medicina.id || 1);

    if(!found){
      return {
        estado : 'error',
        mensaje : NO_ENCONTRADO('Catálogo',', No se puede actualizar'),
        data : null
      }
    }
    
    this.medicinas.forEach((med,index)=>{
        if(med.id == medicina .id){
          this.medicinas[index] = medicina;
        }
    });


    return {
      estado : 'ok',
      mensaje : ACTUALIZADO_EXITO('Medicina',''),
      data : null
    }

  }

}
