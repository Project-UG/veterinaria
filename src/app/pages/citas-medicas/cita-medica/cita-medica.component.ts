import { Component, OnInit, Input, inject } from '@angular/core';
import { HistorialMedicoService } from 'src/app/services/historialMedico.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { PropietarioService } from 'src/app/services/propietario.service';
import { CitaMedica } from 'src/app/types/citaMedica';
import { HistorialMedico } from 'src/app/types/historialMedico';
import { Paciente } from 'src/app/types/paciente';
import { Propietario } from 'src/app/types/propietario';

@Component({
  selector: 'app-cita-medica',
  templateUrl: './cita-medica.component.html',
  styleUrls: ['./cita-medica.component.css']
})

export class CitaMedicaComponent implements OnInit{
  @Input() citaMedica!: CitaMedica;
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
      this.citaMedica.historial_id
    );
    this.paciente = await this.pacienteService.getById(
      this.historial.paciente_id
    );
    this.propietario = await this.propietarioService.getById(
      this.historial.propietario_id
    );
  }

}
