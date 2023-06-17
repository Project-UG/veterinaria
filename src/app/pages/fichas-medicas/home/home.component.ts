import { Component, OnInit, inject } from '@angular/core';
import { FichaMedicaService } from 'src/app/services/fichaMedica.service';
import { HistorialMedicoService } from 'src/app/services/historialMedico.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { FichaMedica } from 'src/app/types/fichaMedica';
import { HistorialMedico } from 'src/app/types/historialMedico';
import { Paciente } from 'src/app/types/paciente';
@Component({
  selector: 'app-fichas-medicas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class FichasMedicasHomeComponent implements OnInit {
  fichaMedicaService: FichaMedicaService = inject(FichaMedicaService);

  listaFichasMedicas: FichaMedica[] = [];
  listaFiltrada: FichaMedica[] = [];

  busqueda = '';
  historial!: HistorialMedico[];
  pacientes!: Paciente[];

  historialMedicoService: HistorialMedicoService = inject(
    HistorialMedicoService
  );
  pacienteService: PacienteService = inject(PacienteService);

  constructor() {
    this.fichaMedicaService.getAll().then((fichasMedicas) => {
      this.listaFichasMedicas = fichasMedicas;
      this.listaFiltrada = fichasMedicas;
    });
  }

  async buscar(text: string) {
    if (!text) {
      this.listaFiltrada = this.listaFichasMedicas;
      // console.log('no text');
    } else {
      this.pacientes = await this.pacienteService.getByNombre(text);
      // console.log('this.pacientes: ', this.pacientes);
      const pacientesIds = this.pacientes.map((p) => p.id);
      // console.log('pacientesIds: ', pacientesIds);

      this.historial = await this.historialMedicoService.getAll();
      // console.log('this.historial: ', this.historial);
      const historiales = this.historial.filter((h) => {
        return pacientesIds.includes(h.paciente_id);
      });
      // console.log('historiales: ', historiales);

      const historialIds = historiales.map((h) => h.id);
      this.listaFiltrada = this.listaFichasMedicas.filter((f) => {
        return historialIds.includes(f.historial_id);
      });
    }
  }

  ngOnInit(): void {}
}
