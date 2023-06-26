import { Injectable } from '@angular/core';
import { Usuario } from '../types/usuarios-administradores.interface';
import { Response } from '../types/response.interface';
import { RolesService } from './roles.service';
import { ACTUALIZADO_EXITO, ELIMINADO_EXITO, NO_ENCONTRADO } from '../helpers/mensajes';
import { AuthService } from './auth.service';

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
    },
    {
      username: 'admin',
      password: 'admin',
      correo: 'admin@veterinaria.com',
      nombres: 'admin',
      apellidos: 'admin',
      fechaCreacion: new Date(),
      estado: true,
      rol   : this.rolService.getRolById(2)!
    },
    {
      username: 'medico',
      password: '1',
      correo: 'medico@veterinaria.com',
      nombres: 'Medico',
      apellidos: 'Medico',
      fechaCreacion: new Date(),
      estado: true,
      rol   : this.rolService.getRolById(4)!
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

  getByCorreo(correo : string) : Usuario[]{
    const usuarios = this.usuarios.filter((us) => us.correo == correo);
    return usuarios;
  }

  getAllUsers(): Usuario[] {
    const usuario = localStorage.getItem('usuario');
    const tempUsuarios = this.usuarios.filter(us => (us.username !== 'root' && us.username!==usuario));
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

  getActivos(){
    const activos = this.usuarios.filter((us)=>us.estado == true);
    return activos;
  }

  getInactivos(){
    const inactivos = this.usuarios.filter((us)=>us.estado == false);
    return inactivos;
  }

  eliminar(usuario : Usuario) : Response{
      let index = 0;
      this.usuarios.forEach((us,i)=>{
          if(us.username == usuario.username){
            index = i;
          }
      });

      this.usuarios.splice(index,1);

      return {
        estado : 'ok',
        mensaje : ELIMINADO_EXITO('Usuario','')
      }
      
  }
}
