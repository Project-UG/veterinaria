import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YA_EXISTE } from 'src/app/helpers/mensajes';
import { Catalogo, CatalogoDetalle } from 'src/app/types/catalogos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-catalogo',
  templateUrl: './detalles-catalogo.component.html',
  styleUrls: ['./detalles-catalogo.component.css']
})
export class DetallesCatalogoComponent implements OnInit {

  form !: FormGroup;

  @Input("catalogo")
  public catalogo! : Catalogo;

  @Output("guardar")
  public guardar:EventEmitter<CatalogoDetalle[]> = new EventEmitter<CatalogoDetalle[]>();

  @Output("ok")
  public salir:EventEmitter<void> = new EventEmitter<void>();


  public detalles!: CatalogoDetalle[];

  public nuevoDetalle !: CatalogoDetalle;


  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      descripcion : ['',Validators.required],
      valor       : ['',Validators.required]
    });

    this.detalles = this.catalogo.detalles || [];
  }

  agregarDetalle(){

    const valor = this.detalles.find((det)=>det.valor == this.form.value.valor);

    if(valor){
      Swal.fire({
        title : 'Error',
        text : YA_EXISTE('Detalle','valor'),
        icon : 'error'
      })
      this.form.reset();
      document.getElementById("descripcion")?.focus();
      return;
    }
    
    let nuevoDetalle = this.form.value;
    nuevoDetalle.id = this.detalles.length;
    nuevoDetalle.catalogo = this.catalogo;
    this.detalles.push(nuevoDetalle);

    this.form.reset();
    document.getElementById("descripcion")?.focus();

  }

  eliminar(det:CatalogoDetalle){
      this.detalles.splice(det.id! , 1);
  }

  guardarDetalles(){
    this.guardar.emit(this.detalles);
    Swal.fire({
      title : 'Exito',
      text : 'Se establecieron los detalles',
      icon : 'success'
    })
    this.salir.emit();
  }

  cancelar(){
    this.salir.emit();
  }

}
