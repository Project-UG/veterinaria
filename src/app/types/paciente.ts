export interface Paciente {
  id: number;
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
  Felino = 'Falino',
}

export enum Sexo {
  Macho = 'M',
  Hembra = 'F',
}
