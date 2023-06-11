import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const routes:Route[] = [
  {
   
  }
]

@NgModule({
  declarations: [
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
