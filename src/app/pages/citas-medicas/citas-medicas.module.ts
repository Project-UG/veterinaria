import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterLinkWithHref, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { CitaMedicaComponent } from './cita-medica/cita-medica.component';
import { AgregarCitaComponent } from './agregar-cita/agregar-cita.component';
import { CitasMedicasHomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Route[] = [
  {path: '', component: CitasMedicasHomeComponent, title: 'Citas Médicas'},
  {path: 'detalle/:id', component: DetalleComponent, title: 'Cita Médica'},
  {path: 'nueva', component: AgregarCitaComponent, title: 'Nueva Cita',
  },
];


@NgModule({
  declarations: [
    CitasMedicasHomeComponent,
    DetalleComponent,
    CitaMedicaComponent,
    AgregarCitaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[RouterModule]
})
export class CitasMedicasModule { }
