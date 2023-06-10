import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdministracionModule } from './pages/administracion/administracion.module';
import { CitasMedicasModule } from './pages/citas-medicas/citas-medicas.module';
import { FichaMedicaModule } from './pages/ficha-medica/ficha-medica.module';
import { GestionMedicosModule } from './pages/gestion-medicos/gestion-medicos.module';
import { HistorialMedicoModule } from './pages/historial-medico/historial-medico.module';
import { MascotasModule } from './pages/mascotas/mascotas.module';

const routes: Routes = [
 
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'app',
    loadChildren: ()=> import('./pages/pages.module').then(m=>m.PagesModule)
  },
  {
    path:'',
    redirectTo:'app'
  },
  {
    path:'**',
    redirectTo:'app'
  }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
