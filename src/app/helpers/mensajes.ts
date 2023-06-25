
export const CREADO_EXITO = (objeto:string , detalles : string) =>  
            `${objeto} creado(a) con éxito ${detalles}`;

export const CREADO_ERROR = (objeto:string , detalles : string) =>  
            `Ocurrio un error al registrar ${objeto} ${detalles}`;

export const NO_ENCONTRADO = (objeto:string , detalles : string) =>  
            `${objeto} no existe ${detalles}`;

export const ACTUALIZADO_EXITO = (objeto:string , detalles : string) =>  
            `Se actualizaron los datos del ${objeto} satisfactoriamente ${detalles}!`;

export const YA_EXISTE = (objeto:string , campo : string) =>  
            `${objeto} con el ${campo} ya existe!`;

export const ELIMINADO_EXITO = (objeto:string , detalles : string) =>  
`Se eliminó el ${objeto} correctamente ${detalles}!`;





