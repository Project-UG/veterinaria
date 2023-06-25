import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosAdministradoresService } from 'src/app/services/usuarios-administradores.service';
import { Response } from 'src/app/types/response.interface';
import { Usuario } from 'src/app/types/usuarios-administradores.interface';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private router: Router,
    private fb : FormBuilder,
    private usuarioService: UsuariosAdministradoresService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username        : ['',Validators.required],
      password        : ['',Validators.required],
      correo          : ['',[Validators.required,Validators.email]],
      nombres         : ['',[Validators.required]],
      apellidos       : ['',[Validators.required]],
      telefono        : ['',[Validators.required]],         
      fechaCreacion   : [new Date()],
      estado          : [true]
    });
  }

  irLogin(){
    this.router.navigateByUrl('auth/login')
  }

  registro(){
    let payload : Usuario = {
      fechaCreacion : new Date(),
      estado : true,
      ...this.form.value
    }
    const response: Response = this.usuarioService.crearUsuario(payload);

    Swal.fire({
      title : (response.estado=='ok') ? 'Exito' : 'Error',
      text : response.mensaje,
      icon :  (response.estado=='ok') ? 'success' : 'error'
    });

    if(response.estado == 'ok'){
      this.router.navigateByUrl('auth/login');
    }

    this.form.reset();

  }

}
