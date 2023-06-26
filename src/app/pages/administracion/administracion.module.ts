import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { RolesComponent } from './roles/roles.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { MedicinasComponent } from './medicinas/medicinas.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from 'src/app/auth/auth.module';

const routes:Route[] = [
  {
   path : 'catalogos',
   component : CatalogosComponent
  },
  {
    path : 'medicinas',
    component : MedicinasComponent
  },
  {
    path: 'roles',
    component : RolesComponent
  },
  {
    path : 'usuarios',
    component : UsuariosComponent
  }


]

@NgModule({
  declarations: [
  
    RolesComponent,
       UsuariosComponent,
       CatalogosComponent,
       MedicinasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule

  ],
  exports:[
    RouterModule
  ]
})
export class AdministracionModule { }
