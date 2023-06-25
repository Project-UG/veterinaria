export interface Paciente {
  id?: number;
  registro: Date;
  nombre: string;
  edad: number;
  especie: string;
  raza: string;
  color: string;
  sexo: string;
  peso: number;
  foto?: string;
  actualizacion: Date;
}

export enum Especie {
  Canino = 'Canino',
  Felino = 'Felino',
}

export enum Sexo {
  Macho = 'M',
  Hembra = 'F',
}
