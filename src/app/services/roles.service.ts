import { Injectable } from '@angular/core';
import { Opcion, Rol, RolUsuario } from '../types/roles.interface';
import { OpcionesService } from './opciones.service';
import { Usuario } from '../types/usuarios-administradores.interface';
import { Response } from '../types/response.interface';
import { ACTUALIZADO_EXITO, CREADO_EXITO, ELIMINADO_EXITO, NO_ENCONTRADO, YA_EXISTE } from '../helpers/mensajes';
import { UsuariosAdministradoresService } from './usuarios-administradores.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  roles: Rol[] = [];

  rolesUsuario: RolUsuario[] = [];

  constructor(
    private opcionService: OpcionesService,
    
  ) {
    this.roles.push(
      {
        id: 1,
        nombre: 'root',
        opciones: this.opcionService.getOpciones(),
        fechaCreacion : new Date(),
        obligatorio : true
      },
      {
        id: 2,
        nombre: 'Administrador',
        opciones: this.opcionService.getOpciones()
                          .filter((opcion)=>opcion.id !== 1),
        fechaCreacion : new Date(),
        obligatorio : true
      },
      {
        id : 3,
        nombre : 'Nuevo Usuario',
        opciones : [],
        fechaCreacion : new Date(),
        obligatorio : true
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

  crearRol(rol : Rol) : Response{

    if(this.getRolByNombre(rol.nombre)){
      return {
        estado : 'error',
        mensaje : YA_EXISTE('Rol','nombre')
      }
    }


    rol.id = this.roles.length + 1 ;
    this.roles.push(rol);

    return {
      estado : 'ok',
      mensaje : CREADO_EXITO('Rol','')
    }
  
  }

  getRoles = async() =>{
    const rolesManipulables = this.roles.filter(rol=>rol.id !== 1);
    return rolesManipulables;
  }

  getRolByNombre(nombre : string){

    const rol = this.roles.find((rol)=>rol.nombre == nombre);

    return rol;

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

    if(payload.obligatorio == true){
      return {
        estado : 'error',
        mensaje : `Rol ${payload.nombre} no se puede eliminar!`,
        data : null
      }
    }

    if(!payload.id){
      return {
        estado : 'error',
        mensaje : NO_ENCONTRADO('Rol',''),
        data : null
      }
    }

  
    this.roles.splice(payload.id-1,1);
    return   {
      estado : 'ok',
      mensaje : ELIMINADO_EXITO('Rol',''),
      data : null
    }

  }

}
