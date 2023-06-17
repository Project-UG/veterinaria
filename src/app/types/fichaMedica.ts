export interface FichaMedica {
  id?: number;
  historial_id: number;
  registro: Date;
  actualizacion: Date;
  color_mucosas: string;
  palpitacion_abdominal: string;
  genitales: string;
  temperatura: number;
  pulso_femoral: string;
  observaciones: string;
}
