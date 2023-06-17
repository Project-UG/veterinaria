import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FichaMedicaService } from 'src/app/services/fichaMedica.service';
import { HistorialMedicoService } from 'src/app/services/historialMedico.service';
import { PropietarioService } from 'src/app/services/propietario.service';
import { FichaMedica } from 'src/app/types/fichaMedica';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-agregar-ficha',
  templateUrl: './agregar-ficha.component.html',
  styleUrls: ['./agregar-ficha.component.css'],
})
export class AgregarFichaComponent implements OnInit {
  email_propietario = '';
  color_mucosas = '';
  palpitacion_abdominal = '';
  genitales = '';
  pulso_femoral = '';
  temperatura = 0;
  observaciones = '';
  nombre_paciente = '';

  form: FormGroup;

  propietarioService: PropietarioService = inject(PropietarioService);
  historialMedicoService: HistorialMedicoService = inject(
    HistorialMedicoService
  );
  fichaMedicaService: FichaMedicaService = inject(FichaMedicaService);
  pacienteService: PacienteService = inject(PacienteService);

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email_propietario: ['', Validators.email],
      nombre_paciente: ['', Validators.required],
      color_mucosas: ['', Validators.required],
      palpitacion_abdominal: ['', Validators.required],
      genitales: ['', Validators.required],
      pulso_femoral: ['', Validators.required],
      temperatura: ['', Validators.required],
      observaciones: ['', Validators.required],
    });
  }

  async findAsync(arr: any, asyncCallback: any) {
    const promises = arr.map(asyncCallback);
    const results = await Promise.all(promises);
    const index = results.findIndex((result) => result);
    return arr[index];
  }

  async agregarFicha() {
    const email = this.form.value.email_propietario;
    // console.log('email:', email);

    const propietario = await this.propietarioService.getByEmail(email);
    // console.log('propietario:', propietario);

    // console.log(JSON.parse(JSON.stringify(propietario)));

    const historiales = await this.historialMedicoService.getByPropietarioId(
      propietario[0].id
    );
    // console.log('historiales:', historiales);

    const pacientesIds = historiales.map((h) => h.paciente_id);
    // console.log('pacientesIds:', pacientesIds);

    const nombre = this.form.value.nombre_paciente;
    // console.log('nombre:', nombre);

    const pacienteId = await this.findAsync(pacientesIds, async (i: number) => {
      const p = await this.pacienteService.getById(i);
      return p.nombre === nombre;
    });

    // const pacienteId = pacientesIds.find(async (i) => {
    //   let p = await this.pacienteService.getById(i);
    //   console.log('paciente', p);
    //   console.log('equals', p.nombre, nombre, p.nombre === nombre);
    //   return p.nombre === nombre;
    // });
    // console.log('pacienteId:', pacienteId);

    const hist = historiales.find((h) => h.paciente_id === pacienteId);
    // console.log('hist:', hist);

    const date = new Date();

    const fichaMedica: FichaMedica = {
      historial_id: Number(hist?.id),
      registro: date,
      actualizacion: date,
      color_mucosas: this.form.value.color_mucosas,
      palpitacion_abdominal: this.form.value.palpitacion_abdominal,
      genitales: this.form.value.genitales,
      temperatura: this.form.value.temperatura,
      pulso_femoral: this.form.value.pulso_femoral,
      observaciones: this.form.value.observaciones,
    };

    if (propietario && historiales) {
      this.fichaMedicaService.create(fichaMedica);
      this.form.reset();
      this.router.navigate(['/app/fichas-medicas']);
    }
  }

  ngOnInit(): void {}
}
