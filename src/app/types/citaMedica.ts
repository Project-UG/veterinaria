export interface CitaMedica {
  id?: number;
  fecha_cita: Date;
  generada: Date;
  hora_cita: string;
  paciente: string;
  historial_id: number;
  propietario: string;
  consultorio: number;
}
