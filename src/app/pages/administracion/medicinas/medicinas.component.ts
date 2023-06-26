import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccionModal } from 'src/app/helpers/enums';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { MedicinasService } from 'src/app/services/medicinas.service';
import { Catalogo, CatalogoDetalle, Medicina } from 'src/app/types/catalogos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicinas',
  templateUrl: './medicinas.component.html',
  styleUrls: ['./medicinas.component.css']
})
export class MedicinasComponent implements OnInit {

  tituloModal : string = 'Registro de Medicina'
  accion : string = AccionModal.CREAR;
  medicinaInput !: Medicina;
  medicinas : Medicina[] = [];
  opcion : string = '0';
  busqueda: string = "";

  constructor(
    private modalService: NgbModal,
    private medicinaService : MedicinasService
  ) { }

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista(){
    this.medicinas = this.medicinaService.getMedicinas();    
  }

  capturar(event:any){
   
    this.opcion = event.target.value;

    if(this.opcion == '0'){
      this.cargarLista();
    }

    if(this.opcion == '1'){
      this.medicinas = this.medicinaService.getActivos(); 
    }

    if(this.opcion == '2'){
      this.medicinas = this.medicinaService.getInactivos();
    }

  }

  async actualizar(medicina : Medicina , content : any){
    
    this.accion = AccionModal.ACTUALIZAR;
    this.medicinaInput = medicina;
    this.tituloModal = 'Actualizar Medicina';



    await this.modalService.open( content, { ariaLabelledBy: 'modal-basic-title' } )
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
          // Busca por la descripción
        case '3':
          this.medicinas = this.medicinaService.getByDescripcion(this.busqueda);
          if(this.medicinas.length == 0){
            this.cargarLista();
          }
        break;  

    }

    this.busqueda = "";

  }

  
  eliminar(medicina : Medicina){

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
        const response = this.medicinaService.eliminar(medicina);

        Swal.fire({
          title : (response.estado == 'ok')?'Éxito':'Error',
          text : response.mensaje,
          icon : (response.estado == 'ok')?'success':'error',
        })
        this.cargarLista();
      }
    })    
  }

  registrar(content:any){

    this.accion = AccionModal.CREAR;
    this.tituloModal = 'Nueva Medicina';

    console.log(this.accion);
    console.log(this.tituloModal);

    this.modalService.open( content, { ariaLabelledBy: 'modal-basic-title' } )
      .result.then((result=>{

    }));
  }

}
