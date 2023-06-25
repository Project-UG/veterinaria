import { Component, OnInit, inject } from '@angular/core';
import { CitaMedicaService } from 'src/app/services/citaMedica.service';
import { HistorialMedicoService } from 'src/app/services/historialMedico.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { CitaMedica } from 'src/app/types/citaMedica';
import { HistorialMedico } from 'src/app/types/historialMedico';
import { Paciente } from 'src/app/types/paciente';

@Component({
  selector: 'app-citas-medicas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class CitasMedicasHomeComponent implements OnInit{

  citaMedicaService: CitaMedicaService = inject(CitaMedicaService);

  listCita: CitaMedica[] = [];
  listaFiltrada: CitaMedica[] = [];

  busqueda = '';
  historial!: HistorialMedico[];
  pacientes!: Paciente[];

  historialMedicoService: HistorialMedicoService = inject(HistorialMedicoService);
  pacienteService: PacienteService = inject(PacienteService);

  constructor() {
    this.citaMedicaService.getAll().then((citasMedicas) => {
      this.listCita = citasMedicas;
      this.listaFiltrada = citasMedicas;
    });
  }

  async buscar(text: string) {
    if (!text) {
      this.listaFiltrada = this.listCita;
    } else {
      this.pacientes = await this.pacienteService.getByNombre(text);
      const pacientesIds = this.pacientes.map((p) => p.id);

      this.historial = await this.historialMedicoService.getAll();
      const historiales = this.historial.filter((h) => {
        return pacientesIds.includes(h.paciente_id);
      });

      const historialIds = historiales.map((h) => h.id);
      this.listaFiltrada = this.listCita.filter((f) => {
        return historialIds.includes(f.historial_id);
      });
    }
  }

  ngOnInit(): void {}

}
