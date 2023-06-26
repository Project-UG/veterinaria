import { Component, OnInit,  Input, inject } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/types/paciente';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';


import { HistorialMedicoService } from 'src/app/services/historialMedico.service';


@Component({
  selector: 'app-detalles-mascotas',
  templateUrl: './detalles-mascotas.component.html',
  styleUrls: ['./detalles-mascotas.component.css']
})
export class DetallesMascotasComponent implements OnInit {


  pacienteService: PacienteService = inject(PacienteService);
  
  // datos:any[] = data

  pacientes: Paciente [] = [];

  paciente!: Paciente;
  

  constructor(private router: Router,@Inject(DOCUMENT) private document: Document) { 
    this.pacienteService.getAll().then((Pacientes) => {
      this.pacientes = Pacientes;
    });

  }

  eliminarRegistro(index:any): void{

    const confirmacion = confirm('¿Estás seguro que desea eliminar el registro de la mascota?');

    if(confirmacion){
      this.pacienteService.remove(index);
      this.document.defaultView?.location.reload();
      alert("Mascota eliminada correctamente");

      this.router.navigate(['/app/mascotas']);

    }

  }

 
  ngOnInit(): void  {
    
    
  }

}
