import { Component, OnInit, Input, inject } from '@angular/core';
import { HistorialMedicoService } from 'src/app/services/historialMedico.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { PropietarioService } from 'src/app/services/propietario.service';
import { FichaMedica } from 'src/app/types/fichaMedica';
import { HistorialMedico } from 'src/app/types/historialMedico';
import { Paciente } from 'src/app/types/paciente';
import { Propietario } from 'src/app/types/propietario';

@Component({
  selector: 'app-ficha-medica',
  templateUrl: './ficha-medica.component.html',
  styleUrls: ['./ficha-medica.component.css'],
})
export class FichaMedicaComponent implements OnInit {
  
  @Input() fichaMedica!: FichaMedica;
  historialMedicoService: HistorialMedicoService = inject(
    HistorialMedicoService
  );
  pacienteService: PacienteService = inject(PacienteService);
  propietarioService: PropietarioService = inject(PropietarioService);

  historial!: HistorialMedico;
  paciente!: Paciente;
  propietario!: Propietario;

  constructor() {}

  async ngOnInit(): Promise<any> {
    this.historial = await this.historialMedicoService.getById(
      this.fichaMedica.historial_id
    );
    this.paciente = await this.pacienteService.getById(
      this.historial.paciente_id
    );
    this.propietario = await this.propietarioService.getById(
      this.historial.propietario_id
    );
  }
}
