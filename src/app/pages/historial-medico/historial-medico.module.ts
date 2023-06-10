import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Route[] = [
  {
    path: ':id',
    component: DetallesComponent,
    title: 'Historial Médico',
  },
];

@NgModule({
  declarations: [DetallesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialMedicoModule {}
