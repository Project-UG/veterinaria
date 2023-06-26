import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YA_EXISTE } from 'src/app/helpers/mensajes';
import { Catalogo, CatalogoDetalle } from 'src/app/types/catalogos.interface';
import Swal from 'sweetalert2';
import { Opcion, Rol } from '../../types/roles.interface'
import { OpcionesService } from 'src/app/services/opciones.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit {

   
  @Input("rol")
  public rol! : Rol;

  opciones!:Opcion[];

  opcionesRol! : Opcion[];

  @Output("guardar")
  public guardar:EventEmitter<Opcion[]> = new EventEmitter<Opcion[]>();

  @Output("ok")
  public salir:EventEmitter<void> = new EventEmitter<void>();

  idOpcion !: number;


  constructor(
    private fb:FormBuilder,
    private opcionesService: OpcionesService,
    private rolesService : RolesService
  ) { }

  ngOnInit(): void {
    console.log("rol ",this.rol);
    this.opciones = [...this.opcionesService.getOpciones()];
    this.opcionesRol = [...this.rolesService.getOpcionesByRolId(this.rol.id)];
  }

  cargarOpciones(){

  }

  agregarOpcion(){
    
    if(!this.idOpcion){
      return;
    }

    const opcion = this.opcionesRol.find((op)=>op.id == this.idOpcion) || null || undefined;

    if(opcion){
      Swal.fire({
        title : 'Error',
        text : 'Opción ya existe',
        icon : 'error'
      })
      return;
    }

    let nuevo = this.opciones.find((op)=>op.id == this.idOpcion);

    this.opcionesRol.push(nuevo!);

  }

  eliminar(opcion:Opcion){
    
    let index = 0;
    this.opcionesRol.forEach((op,ind)=>{
      if(op.titulo == opcion.titulo){
        console.log("encontrado");
        index = ind; 
      }
    })

    this.opcionesRol.splice(index,1);
    
  }

  guardarDetalles(){
    this.guardar.emit(this.opciones);

    this.rol.opciones = this.opcionesRol;

    const response = this.rolesService.actualizarRol(this.rol);

    Swal.fire({
      title : (response.estado == 'ok') ? 'Exito' : 'Error',
      text : response.mensaje,
      icon : (response.estado == 'ok') ? 'success' : 'error'
    })
    this.salir.emit();
  }

  cancelar(){
    this.salir.emit();
  }

  capturar(event:any){
    this.idOpcion = event.target.value;
  }



}
