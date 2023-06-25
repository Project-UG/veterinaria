export interface Medicina{
    id          : number;
    descripcion : string;
    tipo        : string;
    detalleUso  : string;
    stock       : number;
}

export interface Catalogo{
    id?                 : number;
    codigo              : string;
    descripcion         : string;
    estado              : boolean;
    fechaCreacion?      : Date;
    fechaModificacion?  : Date;
    detalles?           : CatalogoDetalle[];
    
}

export interface CatalogoDetalle{
    id?                 : number;
    descripcion         : string;
    valor               : string;
    catalogoCabecera    : Catalogo;
}