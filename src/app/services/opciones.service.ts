import { Injectable } from '@angular/core';
import { Opcion } from '../types/roles.interface';

@Injectable({
  providedIn: 'root'
})
export class OpcionesService {

  opciones : Opcion[] = [];

  constructor() {
      this.opciones = [
        {
          id : 1,
          url : '/app/administracion/catalogos',
          icono : 'fa fa-address-book-o',
          titulo : 'Mant. de Catálogos'
        },
        {
          id : 2,
          url : '/app/administracion/medicinas',
          icono : 'fa fa-medkit',
          titulo : 'Manten. de Medicinas'
        },
        {
          id : 3,
          url : '/app/administracion/roles',
          icono : 'fa fa-user-circle',
          titulo : 'Roles'
        },
        {
          id : 4,
          url : '/app/administracion/usuarios',
          icono : 'fa fa-user-o',
          titulo : 'Adm. de Usuarios'
        },
        {
          id:  5,
          url:'/app/fichas-medicas',
          icono: 'fa fa-stethoscope',
          titulo :'Fichas Médicas'
        },
        {
          id:  6,
          url:'/app/mascotas',
          icono: 'fa fa-address-card',
          titulo :'Mascotas'
        },
        {
          id:  7,
          url:'/app/citas-medicas',
          icono: 'fa fa-calendar',
          titulo :'Citas Médicas'
        },
        {
          id:  8,
          url:'/app/historial-medico',
          icono: 'fa fa-archive',
          titulo :'Historial Médico'
        },

      ]; 
   }

   agregarOpcion(opcion : Opcion){
      opcion.id = this.opciones.length + 1;
      this.opciones.push(opcion); 
   }

   getOpciones(){
    return this.opciones;
   }
}
