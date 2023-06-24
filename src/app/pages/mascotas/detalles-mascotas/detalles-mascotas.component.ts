import { Component, OnInit,  Input, inject } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';


import { HistorialMedicoService } from 'src/app/services/historialMedico.service';


@Component({
  selector: 'app-detalles-mascotas',
  templateUrl: './detalles-mascotas.component.html',
  styleUrls: ['./detalles-mascotas.component.css']
})
export class DetallesMascotasComponent implements OnInit {


  pacienteService: PacienteService = inject(PacienteService);

  constructor() { }

  ngOnInit(): void {
  }

}
