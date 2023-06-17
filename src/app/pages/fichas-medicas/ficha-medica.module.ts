import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterLinkWithHref, RouterModule } from '@angular/router';
import { FichasMedicasHomeComponent } from './home/home.component';
import { FichaMedicaComponent } from './ficha-medica/ficha-medica.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AgregarFichaComponent } from './agregar-ficha/agregar-ficha.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  { path: '', component: FichasMedicasHomeComponent, title: 'Fichas Médicas' },
  {
    path: 'detalles/:id',
    component: DetallesComponent,
    title: 'Ficha Médica',
  },
  {
    path: 'nueva',
    component: AgregarFichaComponent,
    title: 'Nueva Ficha Médica',
  },
];

@NgModule({
  declarations: [
    FichasMedicasHomeComponent,
    FichaMedicaComponent,
    DetallesComponent,
    AgregarFichaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class FichaMedicaModule {}
