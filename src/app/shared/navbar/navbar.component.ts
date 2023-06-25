import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/types/usuarios-administradores.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioConectado! : Usuario | null | undefined;

  constructor(
    private authService:AuthService,
    private router : Router 
  ) { 
    this.usuarioConectado = authService.getUsuario();
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.usuarioConectado = null;
    this.router.navigateByUrl('auth/login');
  }

}
