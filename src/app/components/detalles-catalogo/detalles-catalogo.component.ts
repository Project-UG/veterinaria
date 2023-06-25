import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Catalogo, CatalogoDetalle } from 'src/app/types/catalogos.interface';

@Component({
  selector: 'app-detalles-catalogo',
  templateUrl: './detalles-catalogo.component.html',
  styleUrls: ['./detalles-catalogo.component.css']
})
export class DetallesCatalogoComponent implements OnInit {

  form !: FormGroup;

  @Input("catalogo")
  public catalogo! : Catalogo;

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
    
    let nuevoDetalle = this.form.value;
    nuevoDetalle.id = this.detalles.length;
    nuevoDetalle.catalogo = this.catalogo;
    this.detalles.push(nuevoDetalle);

  }

  eliminar(det:CatalogoDetalle){
      this.detalles.splice(det.id! , 1);
  }

}
