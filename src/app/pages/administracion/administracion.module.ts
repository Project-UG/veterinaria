import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { LoginComponent } from './login/login.component';

const routes:Route[] = [
  {
    path:'',
    component:DashboardComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports:[
    RouterModule
  ]
})
export class AdministracionModule { }
