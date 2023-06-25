import { Injectable } from '@angular/core';
import { Usuario } from '../types/usuarios-administradores.interface';
import { JsonPipe } from '@angular/common';
import { UsuariosAdministradoresService } from './usuarios-administradores.service';
import { Auth } from '../types/auth.interface';
import { catchError } from 'rxjs';
import { Response } from '../types/response.interface';
import { NO_ENCONTRADO } from '../helpers/mensajes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario! : string;

  constructor(
    private usuarioService:UsuariosAdministradoresService
  ) {

   }
  
  getUsuario(){
    
    const username = localStorage.getItem('usuario') || '';

    console.log("username ",username);
    
    if(username!== ''){
      return this.usuarioService.getUserByUsername(username);
    }

    return null;
  }

  login(credenciales : Auth) : Response{

    console.log("username" , credenciales.username);

    const usuario = this.usuarioService.getUserByUsername(credenciales.username);

    if(!usuario){
      return {
        estado : 'error',
        mensaje : NO_ENCONTRADO('Usuario',''),
        data : null
      }
    }

    if(usuario.password !== credenciales.password){
      return {
        estado : 'error',
        mensaje : `Contraseña incorrecta!`,
        data : null
      }
    }

    this.usuario = usuario.username;
    localStorage.setItem('usuario',this.usuario);

    return {
      estado : 'ok',
      mensaje : ``,
      data : null
    }
  }

  logout(){
    localStorage.removeItem('usuario');
    this.usuario = '';
  }

}
