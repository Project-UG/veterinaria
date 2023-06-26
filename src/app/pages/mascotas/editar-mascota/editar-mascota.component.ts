import { Component, OnInit, inject } from '@angular/core';
import { Location } from '@angular/common';
import { PropietarioService } from 'src/app/services/propietario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente.service';
import { Especie, Paciente } from 'src/app/types/paciente';


@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  route: ActivatedRoute = inject(ActivatedRoute);



  pacienteService: PacienteService = inject(PacienteService);

  id=0;
  nombre ="";
  edad =0;
  especie= "";
  raza="";
  color="";
  sexo="";
  peso=0;
  actualizacion = new Date();
  registro = new Date();
  foto="";

  paciente!: Paciente;


 

  pacienteId = parseInt(this.route.snapshot.params['id'], 10);

 
 
   

  constructor(private fb: FormBuilder, private router: Router,private location: Location,
    private mascota: PacienteService) { 

   
  
  }

 

  async ngOnInit(): Promise<void>{

       
   this.pacienteService.getById(this.pacienteId).then((paciente)=>
   {  
     this.id = paciente.id as number;
     this.nombre = paciente.nombre;
     this.edad = paciente.edad;
     this.especie = paciente.especie;
     this.raza = paciente.raza;
     this.color = paciente.color;
     this.sexo = paciente.sexo;
     this.peso = paciente.peso;
     this.registro = paciente.registro;
      
   });




  }

  async editarMascota(){



    const paciente: Paciente = {

      registro: this.registro,
      nombre:this.nombre,
      edad: this.edad,
      especie: this.especie,
      raza: this.raza,
      color: this.color,
      sexo: this.sexo,
      peso: this.peso,
      actualizacion: this.actualizacion,
      foto:this.foto,

    } 

    if(paciente!==null){

      this.pacienteService.update(this.id,paciente);

      this.router.navigate(['/app/mascotas']);
      alert("Mascota Actualizada Correctamente :D");
      console.log(paciente);

    }
    





  }

  goBack(): void {
    this.location.back();
  }

}
