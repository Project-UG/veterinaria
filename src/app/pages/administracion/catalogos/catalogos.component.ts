import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccionModal } from 'src/app/helpers/enums';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { Catalogo, CatalogoDetalle } from 'src/app/types/catalogos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {

  tituloModal : string = 'Registro de Catálogo'
  accion : string = AccionModal.CREAR;
  catalogoInput !: Catalogo;
  catalogoInputDetalle !: Catalogo;
  catalogos : Catalogo[] = [];
  opcion : string = '0';
  busqueda: string = "";

  constructor(
    private modalService: NgbModal,
    private catalogoService : CatalogosService
  ) { }

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista(){
    this.catalogos = this.catalogoService.getCatalogos();
    console.log(this.catalogos);
  }

  capturar(event:any){
   
    this.opcion = event.target.value;

    if(this.opcion == '0'){
      this.cargarLista();
    }

    if(this.opcion == '1'){
      this.catalogos = this.catalogoService.getActivos(); 
    }

    if(this.opcion == '2'){
      this.catalogos = this.catalogoService.getInactivos();
    }

  }

  actualizar(catalogo : Catalogo , content : any){
    this.accion = AccionModal.ACTUALIZAR;
    this.catalogoInput = catalogo;
    this.tituloModal = 'Actualización de Catálogo'

    this.modalService.open( content, { ariaLabelledBy: 'modal-basic-title' } )
      .result.then((result=>{

    }));

  }

  buscar(event:any){

    if(event !== null){
      if(event.keyCode !== 13){
        return;
      }
    }

    console.log(this.opcion)
    if(this.busqueda == ''){
      return;
    }


    switch(this.opcion){
        //Búsqueda por el código
        case '0':
          this.cargarLista();
        break;
        case '3':
          const search  = this.catalogoService.findByCodigo(this.busqueda);

          if(search){
            this.catalogos  = [];
            this.catalogos.push(search);
          }

        break;
        // Busca por la descripción
        case '4':
          this.catalogos = this.catalogoService.findByDescripcion(this.busqueda);
          if(this.catalogos.length == 0){
            this.cargarLista();
          }
        break;  

    }

    this.busqueda = "";

  }

  verDetalles = async(contentDetalle:any , cat : Catalogo ) =>{
    
    this.catalogoInputDetalle = cat;
    await this.modalService.open( contentDetalle, { ariaLabelledBy: 'modal-basic-title' } )
      .result.then((result=>{

    }));
  }

  eliminar(catalogo : Catalogo){

    Swal.fire({
      title: 'Advertencia',
      text: "Está seguro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        const response = this.catalogoService.eliminar(catalogo);

        Swal.fire({
          title : (response.estado == 'ok')?'Éxito':'Error',
          text : response.mensaje,
          icon : (response.estado == 'ok')?'success':'error',
        })
      }
    })    
  }

  registrar(content:any){
    this.accion = AccionModal.CREAR;
    this.tituloModal = 'Registo de Catálogo';

    this.modalService.open( content, { ariaLabelledBy: 'modal-basic-title' } )
      .result.then((result=>{

    }));
  }

  asignarDetalles(event : CatalogoDetalle[]){
    console.log("input ", this.catalogoInputDetalle);
    console.log("detalles nuevos :",event);
    this.catalogoInputDetalle.detalles = event;
    console.log("modificado ",this.catalogoInputDetalle);  
  }



}
