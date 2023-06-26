import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterLinkWithHref, RouterModule } from '@angular/router';
import { AgregarMascotaComponent } from './agregar-mascota/agregar-mascota.component';
import { DetallesMascotasComponent } from './detalles-mascotas/detalles-mascotas.component';
import { EditarMascotaComponent } from './editar-mascota/editar-mascota.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

const routes:Route[] = [

  {path:'', component :DetallesMascotasComponent, title:'Mascotas'},

  {
    path:'nueva',
    component: AgregarMascotaComponent,
    title: 'Nueva Mascota',
  },

  {path:'editar/:id', 
  component :EditarMascotaComponent, 
  title:'Editar Mascota'},

]

@NgModule({
  declarations: [
    AgregarMascotaComponent,
    DetallesMascotasComponent,
    EditarMascotaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[RouterModule]
})
export class MascotasModule { }
