import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes:Route[] = [
  {
    path:'',
    component:DashboardComponent
  }
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
   
  ],
  exports:[
    RouterModule
  ]
})
export class AdministracionModule { }
