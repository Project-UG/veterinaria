import { Component, OnInit, inject } from '@angular/core';
import { Paciente } from 'src/app/types/paciente';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente.service';

import { FichaMedicaService } from 'src/app/services/fichaMedica.service';
import { HistorialMedicoService } from 'src/app/services/historialMedico.service';
import { PropietarioService } from 'src/app/services/propietario.service';
import { FichaMedica } from 'src/app/types/fichaMedica';
import { empty } from 'rxjs';


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
   fecha = new Date();

  


  form: FormGroup;

  pacienteService: PacienteService = inject(PacienteService);
  propietarioService: PropietarioService = inject(PropietarioService);

  fichasMedicas: FichaMedica[] = [];
  paciente: Paciente[] = [];
  
 


  constructor(private fb: FormBuilder, private router: Router, private location: Location) {

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      edad:['', Validators.required],
      especie:['', Validators.required],
      raza:['', Validators.required],
      color:['', Validators.required],
      sexo:['', Validators.required],
      peso:['', Validators.required],

    }) ;

  }

  async agregarMascota(){


   
    

    const paciente: Paciente = {
      
      registro: this.fecha,
      nombre:this.form.value.nombre,
      edad: this.form.value.edad,
      especie: this.form.value.especie,
      raza: this.form.value.raza,
      color: this.form.value.color,
      sexo: this.form.value.sexo,
      peso: this.form.value.peso,
      actualizacion: this.fecha,
      

    } 



    if(paciente!==null){
      this.pacienteService.create(paciente);
      this.form.reset();
      this.router.navigate(['/app/mascotas']);
      alert("Mascota Ingresada Correctamente :D");
    } 



  }
  
   
  

  ngOnInit(): void {
  };

  goBack(): void {
    this.location.back();
  }

  

}
