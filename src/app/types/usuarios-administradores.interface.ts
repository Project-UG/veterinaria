import { Rol } from "./roles.interface";

export interface Usuario{
    username        : string;
    password        : string;
    correo          : string;
    nombres         : string;
    apellidos       : string;
    telefono?       : string;         
    fechaCreacion   : Date;
    estado          : boolean;
    rol             : Rol;  
}
