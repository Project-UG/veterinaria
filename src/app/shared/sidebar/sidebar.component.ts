import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OpcionesService } from 'src/app/services/opciones.service';
import { RolesService } from 'src/app/services/roles.service';
import { UsuariosAdministradoresService } from 'src/app/services/usuarios-administradores.service';
import { Opcion } from 'src/app/types/roles.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  completeSideBar: boolean;

  menuItems!: Opcion[];

  constructor(
    private opcionesService : OpcionesService,
    private authService : AuthService,
    private usuarioService : UsuariosAdministradoresService,
    private rolesService : RolesService
  ) {
    this.cargarOpciones();
    this.completeSideBar = true;
  }

  ngOnInit(): void {
    this.cargarOpciones();
  }

  cargarOpciones(){
    const usuario = this.authService.getUsuario();
    console.log(usuario);
    if(usuario){
      this.menuItems = this.rolesService.getOpcionesByRolId(usuario.rol.id);
    }
  }

  modifySideBarView() {
    this.completeSideBar = !this.completeSideBar;
  }
}
