import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdministracionModule } from './administracion/administracion.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Route[] = [
  {
    path:'',
    component: MainComponent,
    children: [
      {
        path:'',
        component: DashboardComponent
      },
      {
        path:'administracion',
        loadChildren: ()=> import('./administracion/administracion.module').then(m=>m.AdministracionModule)
      },
      {
        path:'citas-medicas',
        loadChildren: ()=> import('./citas-medicas/citas-medicas.module').then(m=>m.CitasMedicasModule)
      },
      {
        path:'ficha-medica',
        loadChildren: ()=> import('./fichas-medicas/ficha-medica.module').then(m=>m.FichaMedicaModule)
      },
      {
        path:'gestion-medicos',
        loadChildren: ()=> import('./gestion-medicos/gestion-medicos.module').then(m=>m.GestionMedicosModule)
      },
      {
        path:'historial-medico',
        loadChildren: ()=> import('./historial-medico/historial-medico.module').then(m=>m.HistorialMedicoModule)
      },
      {
        path:'mascotas',
        loadChildren: ()=> import('./mascotas/mascotas.module').then(m=>m.MascotasModule)
      },

    ]
  }
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports:[
    RouterModule
  ]
})
export class PagesModule { }
