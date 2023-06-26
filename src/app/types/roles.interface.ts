import { Usuario } from "./usuarios-administradores.interface";

export interface Rol{
    id     : number;
    nombre : string;
    fechaCreacion? : Date;
    opciones : Opcion[];
    obligatorio? : boolean
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