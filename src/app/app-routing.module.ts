import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'administracion',
    loadChildren: () =>
      import('./pages/administracion/administracion.module').then(
        (m) => m.AdministracionModule
      ),
  },
  {
    path: 'citas-medicas',
    loadChildren: () =>
      import('./pages/citas-medicas/citas-medicas.module').then(
        (m) => m.CitasMedicasModule
      ),
  },
  {
    path: 'fichas-medicas',
    loadChildren: () =>
      import('./pages/fichas-medicas/fichas-medicas.module').then(
        (m) => m.FichaMedicaModule
      ),
  },
  {
    path: 'gestion-medicos',
    loadChildren: () =>
      import('./pages/gestion-medicos/gestion-medicos.module').then(
        (m) => m.GestionMedicosModule
      ),
  },
  {
    path: 'historial-medico',
    loadChildren: () =>
      import('./pages/historial-medico/historial-medico.module').then(
        (m) => m.HistorialMedicoModule
      ),
  },
  {
    path: 'mascotas',
    loadChildren: () =>
      import('./pages/mascotas/mascotas.module').then((m) => m.MascotasModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
