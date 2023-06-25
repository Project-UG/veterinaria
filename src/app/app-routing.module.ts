import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesMascotasComponent } from './pages/mascotas/detalles-mascotas/detalles-mascotas.component';
import { AgregarMascotaComponent } from './pages/mascotas/agregar-mascota/agregar-mascota.component';
import { EditarMascotaComponent } from './pages/mascotas/editar-mascota/editar-mascota.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'app',
    pathMatch: 'full',
  },

  /* { path: 'mascotas', component: DetallesMascotasComponent },
  { path: 'registro-mascota', component: AgregarMascotaComponent },
  { path: 'editar-mascota', component: EditarMascotaComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
