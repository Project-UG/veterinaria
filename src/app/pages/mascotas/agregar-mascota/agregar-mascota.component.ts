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
  
  // const pacienteSer: Paciente = Object.create(null);
 /*  async create(paciente: Paciente): Promise<Paciente> {
    const response = await axios.post(this.url, paciente);
    return response.data;
  } */


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

 /*  public formulario:FormGroup = new FormGroup({ 
    nombre:new FormControl('',Validators.required),
    edad:new FormControl('',Validators.required),
    especie:new FormControl('',Validators.required),
    raza:new FormControl('',Validators.required),
    color:new FormControl('',Validators.required),
    sexo:new FormControl('',Validators.required),
    peso:new FormControl('', Validators.required)

  }); */

  
   /*  if((this.nombre && this.edad && this.especie && this.raza && this.color && this.sexo
         && this.peso)!==null){

          const nuevoPaciente ={
            nombre:this.nombre,
            edad:this.edad,
            especie:this.especie,
            raza:this.raza,
            color:this.color,
            sexo:this.sexo,
            peso:this.peso
          }

         
    /* 
           const edad = this.form.value.edad;
            const especie =this.form.value.especie;
           const raza =this.form.value.raza;
           const color =this.form.value.color;
           const sexo =this.form.value.sexo;
            const peso =this.form.value.peso; */

          // this.pacienteService.create(nuevoPaciente);

         


    
   /*  const nombre = this.form.value.nombre;
    const edad = this.form.value.edad;
    const especie =this.form.value.especie;
    const raza =this.form.value.raza;
    const color =this.form.value.color;
    const sexo =this.form.value.sexo;
    const peso =this.form.value.peso; */

    // this.pacienteService.create;

    /* async create(paciente: Paciente): Promise<Paciente> {
    const response = await axios.post(this.url, paciente);
    return response.data;
  } */


  

  // const paciente: Paciente = {

    // paciente_id: Number(hist?.id),

    /* const nombre = this.form.value.nombre;
    const edad = this.form.value.edad,
    const especie =this.form.value.especie,
    const raza =this.form.value.raza,
    const color =this.form.value.color,
    const sexo =this.form.value.sexo,
    const peso =this.form.value.peso,


    historial_id: Number(hist?.id),
    registro: date,
    actualizacion: date,
    color_mucosas: this.form.value.color_mucosas,
    palpitacion_abdominal: this.form.value.palpitacion_abdominal,
    genitales: this.form.value.genitales,
    temperatura: this.form.value.temperatura,
    pulso_femoral: this.form.value.pulso_femoral,
    observaciones: this.form.value.observaciones, */
  // };


  
   
  

  ngOnInit(): void {
  };

  goBack(): void {
    this.location.back();
  }

  

}
