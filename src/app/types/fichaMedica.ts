import { Paciente } from './paciente';
import { Propietario } from './propietario';

export interface FichaMedica {
  id: number;
  propietario: Propietario;
  paciente: Paciente;
  obtencion: Obtencion;
  registro: Date;
  actualizacion: Date;
}

export enum Obtencion {
  Compra = 'Compra',
  Rescatado = 'Rescatado',
  NacidoEnCasa = 'Nacido en casa',
  Regalo = 'Regalo',
  Adopcion = 'Adopcion',
  NA = 'N/A',
}
