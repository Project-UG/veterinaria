import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoCatalogoComponent } from './nuevo-catalogo/nuevo-catalogo.component';
import { NuevoDetalleCatalogoComponent } from './nuevo-detalle-catalogo/nuevo-detalle-catalogo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallesCatalogoComponent } from './detalles-catalogo/detalles-catalogo.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { NuevoRolComponent } from './nuevo-rol/nuevo-rol.component';
import { NuevaMedicinaComponent } from './nueva-medicina/nueva-medicina.component';

@NgModule({
  declarations: [
    NuevoCatalogoComponent,
    NuevoDetalleCatalogoComponent,
    DetallesCatalogoComponent,
    OpcionesComponent,
    NuevoRolComponent,
    NuevaMedicinaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NuevoCatalogoComponent,
    NuevoDetalleCatalogoComponent,
    DetallesCatalogoComponent,
    OpcionesComponent,
    NuevoRolComponent,
    NuevaMedicinaComponent
  ]
})
export class ComponentsModule { }
