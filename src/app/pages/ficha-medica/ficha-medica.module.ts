import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterLinkWithHref, RouterModule } from '@angular/router';
import { FichasMedicasHomeComponent } from './fichas-medicas-home/fichas-medicas-home.component';
import { FichaMedicaComponent } from './ficha-medica/ficha-medica.component';

const routes: Route[] = [{ path: '', component: FichasMedicasHomeComponent }];

@NgModule({
  declarations: [FichasMedicasHomeComponent, FichaMedicaComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaMedicaModule {}
