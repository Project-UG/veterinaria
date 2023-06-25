import { Injectable } from '@angular/core';
import { Catalogo, CatalogoDetalle } from '../types/catalogos.interface';
import { Response } from '../types/response.interface';
import { ACTUALIZADO_EXITO, CREADO_EXITO, ELIMINADO_EXITO, NO_ENCONTRADO, YA_EXISTE } from '../helpers/mensajes';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  catalogos : Catalogo[] = [];

  constructor() { }

  agregarCatalogo(catalogo : Catalogo) : Response{

    const validarCodigo = this.findByCodigo(catalogo.codigo);

    if(validarCodigo){
      return {
        estado : 'error',
        mensaje : YA_EXISTE('Catálogo','código'),
        data : null
      }
    }

    catalogo.id = this.catalogos.length+1;
    this.catalogos.push(catalogo);

    return {
      estado : 'ok',
      mensaje : CREADO_EXITO('Catálogo',''),
      data : catalogo
    }
  }

  findById(id : number){
    const catalogo = this.catalogos.find((cat)=>cat.id === id);
    return catalogo;
  }

  findByDescripcion(descripcion : string) : Catalogo[]{
      const listaTemporal = this.catalogos.filter((cat)=>cat.descripcion.includes(descripcion));
      return listaTemporal;
  }

  findByCodigo(codigo : string) : Catalogo | null{
    return this.catalogos.find((cat)=>cat.codigo == codigo) || null;  
  }

  editarCatalogo(catalogo : Catalogo) : Response{
    
    let catalogoFound = this.findById(catalogo.id || 1);

    if(!catalogoFound){
      return {
        estado : 'error',
        mensaje : NO_ENCONTRADO('Catálogo',', No se puede actualizar'),
        data : null
      }
    }
    
    this.catalogos.forEach((cat,index)=>{
        if(cat.id == catalogo .id){
          this.catalogos[index] = catalogo;
        }
    });


    return {
      estado : 'ok',
      mensaje : ACTUALIZADO_EXITO('Catálogo',''),
      data : null
    }

  }

  eliminar(catalogo: Catalogo){
    
    let catalogoFound = this.findById(catalogo.id || 1);

    if(!catalogoFound){
      return {
        estado : 'error',
        mensaje : NO_ENCONTRADO('Catálogo',', No se puede eliminar'),
        data : null
      }
    }

    if(catalogo.id !== null){
      this.catalogos.splice(((catalogo.id || 1) -1),1);
    }

    return {
      estado : 'ok',
      mensaje : ELIMINADO_EXITO('Catálogo',''),
      data : null
    }
  }

  agregarDetalles(detalles : CatalogoDetalle[] , payload : Catalogo) :Response{
    
    let catalogo = this.findById(payload.id!) || null;

    if(!catalogo){
      return {
        estado : 'error',
        mensaje : NO_ENCONTRADO('Catálogo',''),
        data : null
      }
    }

    catalogo.detalles = detalles;

    this.catalogos.forEach((cat,index)=>{
      if(cat.id == payload.id){
        this.catalogos[index] = catalogo!;
      }
    })

    return {
      estado : 'ok',
      mensaje : ACTUALIZADO_EXITO('Catálogo',' con detalles'),
      data : null
    }

  }

  getCatalogos() : Catalogo[]{
    return this.catalogos;
  }

  getActivos() : Catalogo[]{
    const activos = this.catalogos.filter((cat)=>cat.estado == true);
    return activos; 
  }

  getInactivos() : Catalogo[]{
    const activos = this.catalogos.filter((cat)=>cat.estado == false);
    return activos; 
  }

}
