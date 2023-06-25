import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoCatalogoComponent } from './nuevo-catalogo/nuevo-catalogo.component';
import { NuevoDetalleCatalogoComponent } from './nuevo-detalle-catalogo/nuevo-detalle-catalogo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallesCatalogoComponent } from './detalles-catalogo/detalles-catalogo.component';

@NgModule({
  declarations: [
    NuevoCatalogoComponent,
    NuevoDetalleCatalogoComponent,
    DetallesCatalogoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NuevoCatalogoComponent,
    NuevoDetalleCatalogoComponent,
    DetallesCatalogoComponent
  ]
})
export class ComponentsModule { }
