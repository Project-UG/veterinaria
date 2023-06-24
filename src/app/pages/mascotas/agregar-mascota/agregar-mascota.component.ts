import { Component, OnInit, inject } from '@angular/core';
import { Paciente } from 'src/app/types/paciente';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente.service';


import { FichaMedicaService } from 'src/app/services/fichaMedica.service';
import { HistorialMedicoService } from 'src/app/services/historialMedico.service';
import { PropietarioService } from 'src/app/services/propietario.service';
import { FichaMedica } from 'src/app/types/fichaMedica';


@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent implements OnInit {

  

  nombre ="";
  edad =0;
  especie="";
  raza="";
  color="";
  sexo="";
  peso=0;

  form: FormGroup;

  pacienteService: PacienteService = inject(PacienteService);


  async agregarMascota(){

    const nombre = this.form.value.nombre;
    const edad = this.form.value.edad;
    const especie =this.form.value.especie;
    const raza =this.form.value.raza;
    const color =this.form.value.color;
    const sexo =this.form.value.sexo;
    const peso =this.form.value.peso;


    


  }


  constructor(private fb:FormBuilder, private route: Router, private location: Location) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      edad:['', Validators.required],
      especie:['', Validators.required],
      raza:['', Validators.required],
      color:['', Validators.required],
      sexo:['', Validators.required],

    });
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  

}
