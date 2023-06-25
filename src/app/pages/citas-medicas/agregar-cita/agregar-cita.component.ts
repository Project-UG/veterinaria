import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaMedicaService } from 'src/app/services/citaMedica.service';
import { HistorialMedicoService } from 'src/app/services/historialMedico.service';
import { PropietarioService } from 'src/app/services/propietario.service';
import { CitaMedica } from 'src/app/types/citaMedica';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css'],
})
export class AgregarCitaComponent implements OnInit {
  fecha_cita = '';
  fecha_cita_generada = '';
  hora_cita = '';
  paciente = '';
  dueño = '';
  email_dueño = '';
  consultorio = 0;

  form: FormGroup;

  propietarioService: PropietarioService = inject(PropietarioService);
  historialMedicoService: HistorialMedicoService = inject(
    HistorialMedicoService
  );
  citaMedicaService: CitaMedicaService = inject(CitaMedicaService);
  pacienteService: PacienteService = inject(PacienteService);

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email_propietario: ['', Validators.email],
      fecha_cita: ['', Validators.required],
      fecha_cita_generada: ['', Validators.required],
      hora_cita: ['', Validators.required],
      paciente: ['', Validators.required],
      dueño: ['', Validators.required],
      consultorio: ['', Validators.required],
    });
  }

  async findAsync(arr: any, asyncCallback: any) {
    const promises = arr.map(asyncCallback);
    const results = await Promise.all(promises);
    const index = results.findIndex((result) => result);
    return arr[index];
  }

  async agregarCita() {
    const email = this.form.value.email_propietario;

    const propietario = await this.propietarioService.getByEmail(email);

    const historiales = await this.historialMedicoService.getByPropietarioId(
      propietario[0].id
    );

    const pacientesIds = historiales.map((h) => h.paciente_id);

    const nombre_paciente = this.form.value.nombre_paciente;

    const pacienteId = await this.findAsync(pacientesIds, async (i: number) => {
      const p = await this.pacienteService.getById(i);
      return p.nombre === nombre_paciente;
    });

    const hist = historiales.find((h) => h.paciente_id === pacienteId);
    // console.log('hist:', hist);

    const date = new Date();

    const citaMedica: CitaMedica = {
      historial_id: Number(hist?.id),
      fecha_cita: date,
      fecha_cita_generada: date,
      hora_cita: this.form.value.hora_cita,
      paciente: this.form.value.paciente,
      propietario: this.form.value.propietario,
      consultorio: this.form.value.consultorio,
      id: 0,
    };

    if (propietario && historiales) {
      this.citaMedicaService.create(citaMedica);
      this.form.reset();
      this.router.navigate(['/app/citas-medicas']);
    }
  }

  ngOnInit(): void {}
}
