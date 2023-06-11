import { Component, OnInit } from '@angular/core';
import { FichaMedica, Obtencion } from 'src/app/types/fichaMedica';
import { Especie, Sexo } from 'src/app/types/paciente';
import { Propietario } from 'src/app/types/propietario';

@Component({
  selector: 'app-fichas-medicas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class FichasMedicasHomeComponent implements OnInit {
  date = new Date('Jul 12 2011');
  propietario: Propietario = {
    id: 1,
    nombre: 'Kevin',
    apellido: 'Taffur',
    telefono: 9999999999,
    direccion: 'Test',
    email: 'test@example.com',
  };
  paciente = {
    id: 1,
    nombre: 'Rufus',
    edad: 2,
    especie: Especie.Canino,
    raza: 'Husky',
    color: 'Blando y negro',
    sexo: Sexo.Hembra,
    peso: 25,
    foto: '/assets/images/pacientes/pexels-antonio-florentini-803766.jpg',
  };
  listaFichasMedicas: FichaMedica[] = [
    {
      id: 1,
      propietario: this.propietario,
      paciente: this.paciente,
      obtencion: Obtencion.Adopcion,
      registro: this.date,
      actualizacion: this.date,
    },
    {
      id: 2,
      propietario: this.propietario,
      paciente: this.paciente,
      obtencion: Obtencion.Adopcion,
      registro: this.date,
      actualizacion: this.date,
    },
    {
      id: 3,
      propietario: this.propietario,
      paciente: this.paciente,
      obtencion: Obtencion.Adopcion,
      registro: this.date,
      actualizacion: this.date,
    },
    {
      id: 4,
      propietario: this.propietario,
      paciente: this.paciente,
      obtencion: Obtencion.Adopcion,
      registro: this.date,
      actualizacion: this.date,
    },
    {
      id: 5,
      propietario: this.propietario,
      paciente: this.paciente,
      obtencion: Obtencion.Adopcion,
      registro: this.date,
      actualizacion: this.date,
    },
    {
      id: 6,
      propietario: this.propietario,
      paciente: this.paciente,
      obtencion: Obtencion.Adopcion,
      registro: this.date,
      actualizacion: this.date,
    },
    {
      id: 7,
      propietario: this.propietario,
      paciente: this.paciente,
      obtencion: Obtencion.Adopcion,
      registro: this.date,
      actualizacion: this.date,
    },
    {
      id: 8,
      propietario: this.propietario,
      paciente: this.paciente,
      obtencion: Obtencion.Adopcion,
      registro: this.date,
      actualizacion: this.date,
    },
    {
      id: 9,
      propietario: this.propietario,
      paciente: this.paciente,
      obtencion: Obtencion.Adopcion,
      registro: this.date,
      actualizacion: this.date,
    },
    {
      id: 10,
      propietario: this.propietario,
      paciente: this.paciente,
      obtencion: Obtencion.Adopcion,
      registro: this.date,
      actualizacion: this.date,
    },
    {
      id: 11,
      propietario: this.propietario,
      paciente: this.paciente,
      obtencion: Obtencion.Adopcion,
      registro: this.date,
      actualizacion: this.date,
    },
    {
      id: 12,
      propietario: this.propietario,
      paciente: this.paciente,
      obtencion: Obtencion.Adopcion,
      registro: this.date,
      actualizacion: this.date,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
