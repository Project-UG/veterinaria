export interface Paciente {
  id: number;
  registro: Date;
  nombre: string;
  edad: number;
  especie: Especie;
  raza: string;
  color: string;
  sexo: Sexo;
  peso: number;
  foto: string;
}

export enum Especie {
  Canino = 'Canino',
  Felino = 'Felino',
}

export enum Sexo {
  Macho = 'M',
  Hembra = 'F',
}
