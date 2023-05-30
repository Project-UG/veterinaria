import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterLinkWithHref, RouterModule } from '@angular/router';

const routes:Route[] = [

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class FichaMedicaModule { }
