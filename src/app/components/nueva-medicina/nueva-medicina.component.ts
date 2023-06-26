import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccionModal } from 'src/app/helpers/enums';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { MedicinasService } from 'src/app/services/medicinas.service';
import { Catalogo, Medicina } from 'src/app/types/catalogos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nueva-medicina',
  templateUrl: './nueva-medicina.component.html',
  styleUrls: ['./nueva-medicina.component.css']
})
export class NuevaMedicinaComponent implements OnInit {

  public form!:FormGroup;

  public labelAction = "Guardar";

  @Input("accion")
  public accion!: string;

  @Input("medicina")
  public medicina!: Medicina;

  @Output("guardar")
  guardar : EventEmitter<Catalogo> = new EventEmitter<Catalogo>();

  @Output("cancelar")
  cancelar : EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb:FormBuilder,
    private medicinasService : MedicinasService
  ) {
    
    if(this.accion == AccionModal.ACTUALIZAR){
      this.form.setValue({...this.medicina});
      this.labelAction = 'Actualizar'
    }

   }

  ngOnInit(): void {
    this.form = this.fb.group({
      id : '',
      descripcion : ['',Validators.required],
      tipo : ['',Validators.required],
      detalleUso : '',
      stock : 0,
      estado : true
    });

    if(this.accion == AccionModal.ACTUALIZAR){
      this.form.setValue({...this.medicina});
    }
  }

  guardarAction(){


    if(this.accion == AccionModal.CREAR){

      const { fechaCreacion , estado , ...datos  } = this.form.value;

      const response = this.medicinasService.agregarMedicina(
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

      const response = this.medicinasService.editarMedicina(
        {
          estado : (estado=='true')?true:false,
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

  }

  cancelarAction(){
    this.cancelar.emit();
  }

}
