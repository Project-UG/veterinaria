import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccionModal } from 'src/app/helpers/enums';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { Catalogo } from 'src/app/types/catalogos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-catalogo',
  templateUrl: './nuevo-catalogo.component.html',
  styleUrls: ['./nuevo-catalogo.component.css']
})
export class NuevoCatalogoComponent implements OnInit {

  public form!:FormGroup;

  public labelAction = "Guardar";

  @Input("accion")
  public accion!: string;

  @Input("catalogo")
  public catalogo!: Catalogo;

  @Output("guardar")
  guardar : EventEmitter<Catalogo> = new EventEmitter<Catalogo>();

  @Output("guardar")
  cancelar : EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb:FormBuilder,
    private catalogoService : CatalogosService
  ) {
    
    if(this.accion == AccionModal.ACTUALIZAR){
      this.form.setValue({...this.catalogo});
      this.labelAction = 'Actualizar'
    }

   }

  ngOnInit(): void {
    this.form = this.fb.group({
      id : '',
      codigo : ['',Validators.required],
      descripcion : ['',Validators.required],
      estado : true,
      fechaCreacion : new Date()
    });

    console.log("catalogo ",this.catalogo);
    
    if(this.accion == AccionModal.ACTUALIZAR){
      this.form.setValue({...this.catalogo});
    }

  }

  guardarAction(){



    if(this.accion == AccionModal.CREAR){

      const { fechaCreacion , estado , ...datos  } = this.form.value;

      const response = this.catalogoService.agregarCatalogo(
                          {
                            fechaCreacion: new Date(),
                            estado : true, 
                            ...datos});
      Swal.fire({
        title : (response.estado=='ok')?'Exito':'Error',
        text : response.mensaje,
        icon : (response.estado=='ok')?'success':'error',
      })

    }
    else{
      const {  fechaModificacion , fechaCreacion,estado,  ...datos  } = this.form.value;

      console.log(this.form.value);

      const response = this.catalogoService.editarCatalogo(
        {
          estado : (estado=='true')?true:false,
          fechaCreacion : this.catalogo.fechaCreacion,
           fechaModificacion: new Date(),
          ...datos});
        Swal.fire({
        title : (response.estado=='ok')?'Exito':'Error',
        text : response.mensaje,
        icon : (response.estado=='ok')?'success':'error',
        })
    }
    
    this.guardar.emit();
    this.cancelar.emit();
    this.form.reset();

    console.log(this.catalogoService.getCatalogos());

  }

  cancelarAction(){
    this.cancelar.emit();
  }

}
