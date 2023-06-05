import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterLinkWithHref, RouterModule } from '@angular/router';
import { FichasMedicasHomeComponent } from './home/home.component';
import { FichaMedicaComponent } from './ficha-medica/ficha-medica.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Route[] = [
  { path: '', component: FichasMedicasHomeComponent, title: 'Fichas Médicas' },
  { path: 'detalles/:id', component: DetallesComponent, title: 'Detalle' },
];

@NgModule({
  declarations: [
    FichasMedicasHomeComponent,
    FichaMedicaComponent,
    DetallesComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaMedicaModule {}
