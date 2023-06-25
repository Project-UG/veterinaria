import { Usuario } from "./usuarios-administradores.interface";

export interface Rol{
    id     : number;
    nombre : string;
    opciones : Opcion[];
}

export interface RolUsuario{
    usuario : Usuario,
    rol     : Rol
}

export interface Opcion{
    id?     : number;
    url     : string;
    icono   : string;
    titulo  : string;
}