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
    path:'',
    component:DashboardComponent
  },
  {
    path:'**',
    redirectTo:''
  },
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'administracion',
    loadChildren: ()=> import('./pages/administracion/administracion.module').then(m=>m.AdministracionModule)
  },
  {
    path:'citas-medicas',
    loadChildren: ()=> import('./pages/citas-medicas/citas-medicas.module').then(m=>m.CitasMedicasModule)
  },
  {
    path:'ficha-medica',
    loadChildren: ()=> import('./pages/ficha-medica/ficha-medica.module').then(m=>m.FichaMedicaModule)
  },
  {
    path:'gestion-medicos',
    loadChildren: ()=> import('./pages/gestion-medicos/gestion-medicos.module').then(m=>m.GestionMedicosModule)
  },
  {
    path:'historial-medico',
    loadChildren: ()=> import('./pages/historial-medico/historial-medico.module').then(m=>m.HistorialMedicoModule)
  }
  ,
  {
    path:'mascotas',
    loadChildren: ()=> import('./pages/mascotas/mascotas.module').then(m=>m.MascotasModule)
  }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
