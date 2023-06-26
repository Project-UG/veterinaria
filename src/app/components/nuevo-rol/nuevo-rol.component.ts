import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccionModal } from 'src/app/helpers/enums';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { RolesService } from 'src/app/services/roles.service';
import { Catalogo } from 'src/app/types/catalogos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-rol',
  templateUrl: './nuevo-rol.component.html',
  styleUrls: ['./nuevo-rol.component.css']
})
export class NuevoRolComponent implements OnInit {

  public form!:FormGroup;

  public labelAction = "Guardar";


  @Output("guardar")
  guardar : EventEmitter<Catalogo> = new EventEmitter<Catalogo>();

  @Output("cancelar")
  cancelar : EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb:FormBuilder,
    private rolService : RolesService
  ) {
    
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      id : '',
      nombre : ['',Validators.required]
    });
  
  }

  guardarAction(){

      const response = this.rolService.crearRol(
                          {
                            fechaCreacion: new Date(),
                            ...this.form.value});
      Swal.fire({
        title : (response.estado=='ok')?'Exito':'Error',
        text : response.mensaje,
        icon : (response.estado=='ok')?'success':'error',
      })

 
    this.guardar.emit();
    this.cancelar.emit();
    this.form.reset();

  }

  cancelarAction(){
    this.cancelar.emit();
  }

}
