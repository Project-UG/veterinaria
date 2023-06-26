import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Inicio de Sesión',
  },
  {
    path: 'registro',
    component: RegistroComponent,
    title: 'Registro',
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    
  ],
  exports:[RouterModule , RegistroComponent]
})
export class AuthModule {}
