import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistorialMedicoService } from 'src/app/services/historialMedico.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { PropietarioService } from 'src/app/services/propietario.service';
import { FichaMedica } from 'src/app/types/fichaMedica';
import { HistorialMedico } from 'src/app/types/historialMedico';
import { Paciente } from 'src/app/types/paciente';
import { Propietario } from 'src/app/types/propietario';
import { FichaMedicaService } from 'src/app/services/fichaMedica.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);

  historialMedicoService: HistorialMedicoService = inject(
    HistorialMedicoService
  );
  pacienteService: PacienteService = inject(PacienteService);
  propietarioService: PropietarioService = inject(PropietarioService);
  fichaMedicaService: FichaMedicaService = inject(FichaMedicaService);

  historial!: HistorialMedico;
  paciente!: Paciente;
  propietario!: Propietario;

  fichasMedicas: FichaMedica[] = [];

  historialMedicoId = parseInt(this.route.snapshot.params['id'], 10);

  constructor() {}

  async ngOnInit(): Promise<void> {
    this.historial = await this.historialMedicoService.getById(
      this.historialMedicoId
    );
    console.log(this.historial);
    this.paciente = await this.pacienteService.getById(
      this.historial.paciente_id
    );
    console.log(this.paciente);
    this.propietario = await this.propietarioService.getById(
      this.historial.propietario_id
    );
    console.log(this.propietario);
    this.fichasMedicas = await this.fichaMedicaService.getMany(
      this.historialMedicoId
    );
    console.log(this.fichasMedicas);
  }
}
