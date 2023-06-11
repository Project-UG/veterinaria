import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path:'app',
    loadChildren: ()=> import('./pages/pages.module').then(m=>m.PagesModule)
  },
  {
    path:'',
    redirectTo:'app',
    pathMatch : 'full'
  },
  {
    path:'**',
    redirectTo:'app',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
