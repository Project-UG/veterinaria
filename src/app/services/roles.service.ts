import { Injectable } from '@angular/core';
import { Opcion, Rol, RolUsuario } from '../types/roles.interface';
import { OpcionesService } from './opciones.service';
import { Usuario } from '../types/usuarios-administradores.interface';
import { Response } from '../types/response.interface';
import { ACTUALIZADO_EXITO, ELIMINADO_EXITO, NO_ENCONTRADO } from '../helpers/mensajes';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  roles: Rol[] = [];

  rolesUsuario: RolUsuario[] = [];

  constructor(
    private opcionService: OpcionesService
  ) {
    this.roles.push(
      {
        id: 1,
        nombre: 'root',
        opciones: this.opcionService.getOpciones()
      },
      {
        id: 2,
        nombre: 'Administrador',
        opciones: this.opcionService.getOpciones()
                          .filter((opcion)=>opcion.id !== 1)
      },
      {
        id : 3,
        nombre : 'Nuevo Usuario',
        opciones : []
      }

    );
  }


  getRolPrincipal(){
    return this.roles[0];
  }

  getRolDefault(){
    return this.roles[2];
  }

  getRolById( id : number) : Rol | undefined | null{
      const foundedRol = this.roles.find((rol)=>rol.id === id);
      return foundedRol;
  }

  getOpcionesByRolId(rolId:number) : Opcion[]{
    const rol = this.getRolById(rolId);

    if(!rol){
      return [];
    }

    return rol?.opciones;
  }

  getRolesByDescripcion(descripcion:string){

    const result = this.roles.filter((rol)=>rol.nombre == descripcion);
    return result;

  }

  asignarRolUsuario(rol:Rol , usuario : Usuario){

    const rolUsuarioNuevo : RolUsuario = {
        rol,
        usuario
    }
    this.rolesUsuario.push(rolUsuarioNuevo);    
  }

  crearRol(rol : Rol){
    rol.id = this.roles.length + 1 ;
    this.roles.push(rol);
  }

  getRoles(){
    return this.roles;
  }

  actualizarRol( rol : Rol) : Response{
    
    const searchRol = this.getRolById(rol.id);
    
    if(searchRol == null || searchRol == undefined ){
      
      return {
        estado : 'error',
        mensaje : NO_ENCONTRADO('Rol',''),
        data : null
      }

    }

    this.roles.forEach((item,index)=>{
      if(item.id == rol.id){
        this.roles[index] = rol;
      }
    });

    return {
      estado : 'ok',
      mensaje : ACTUALIZADO_EXITO('Rol',''),
      data : null
    }
  }

  eliminarRol( payload : Rol) : Response{

    if(payload.id){
      return {
        estado : 'error',
        mensaje : NO_ENCONTRADO('Rol','id'),
        data : null
      }
    }

    const rol = this.rolesUsuario.find((item)=> item.rol.id === payload.id);

    if(!rol){
      return  {
        estado : 'error',
        mensaje : NO_ENCONTRADO('Rol','id'),
        data : null
      }
    }

    this.roles.splice(1,payload.id-1);
    return   {
      estado : 'ok',
      mensaje : ELIMINADO_EXITO('Rol',''),
      data : null
    }

  }


}
