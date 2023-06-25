import { Injectable } from '@angular/core';
import { Usuario } from '../types/usuarios-administradores.interface';
import { Response } from '../types/response.interface';
import { RolesService } from './roles.service';
import { ACTUALIZADO_EXITO, NO_ENCONTRADO } from '../helpers/mensajes';

@Injectable({
  providedIn: 'root'
})
export class UsuariosAdministradoresService {

  usuarios: Usuario[] = [
    {
      username: 'root',
      password: 'root',
      correo: 'root@veterinaria.com',
      nombres: 'Super',
      apellidos: 'Usuario',
      fechaCreacion: new Date(),
      estado: true,
      rol   : this.rolService.getRolPrincipal()
    }
  ];

  constructor(
    private rolService:RolesService
  ) {
    
  }

  getUserByUsername(username: string): Usuario | undefined | null {
    const user = this.usuarios.find((us) => us.username == username);
    return user;
  }

  getAllUsers(): Usuario[] {
    const tempUsuarios = this.usuarios.filter(us => us.username !== 'root');
    return tempUsuarios;
  }

  validarUsername(username: string): boolean {
    const user = this.usuarios.find((us) => us.username == username);

    if (user) {
      return true;
    }

    return false;
  }

  crearUsuario(usuario: Usuario): Response {

    console.log("usuarios ",this.usuarios)
    
    const existe : boolean = this.validarUsername(usuario.username);

    if (existe) {
      return {
        estado: 'error',
        mensaje: "Usuario " + usuario.username + " ya existe",
        data: null
      }
    }

    usuario.rol = this.rolService.getRolDefault();
    usuario.fechaCreacion = new Date()
    this.usuarios.push(usuario);

    return {
      estado: 'ok',
      mensaje: "Usuario " + usuario.username + " creado satisfactoriamente!",
      data: null
    }
  }

  editarUsuario(usuario: Usuario): Response {
    
    const usuarioFound = this.getUserByUsername(usuario.username);

    if(!usuarioFound){
      return {
        estado: 'error',
        mensaje: NO_ENCONTRADO('Usuario',''),
        data: null
      }
    }

    this.usuarios.forEach((us,index)=>{
      if(us.username == usuario.username){
        this.usuarios[index] = usuario;
      }
    });

    return {
      estado: 'ok',
      mensaje: ACTUALIZADO_EXITO('Usuario',''),
      data: null
    }
  }

}
