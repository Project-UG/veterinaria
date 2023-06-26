import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccionModal } from 'src/app/helpers/enums';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { RolesService } from 'src/app/services/roles.service';
import { Catalogo, CatalogoDetalle } from 'src/app/types/catalogos.interface';
import { Opcion, Rol } from 'src/app/types/roles.interface';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  rolInput !: Rol;
  rolInputDetalles !: Rol;
  roles : Rol[] = [];
  opcion : string = '0';
  busqueda: string = "";
  rolDetalles! : Rol;

  constructor(
    private modalService: NgbModal,
    private rolesService : RolesService
  ) { }

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista = async() =>{
    this.roles = await this.rolesService.getRoles();
    console.log(this.roles);
  }

  capturar(event:any){
   
    this.opcion = event.target.value;

    if(this.opcion == '0'){
      this.cargarLista();
    }

   

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
        // Busca por nombre
        case '4':
          this.roles = this.rolesService.getRolesByDescripcion(this.busqueda);
          if(this.roles.length == 0){
            this.cargarLista();
          }
        break;  

    }

    this.busqueda = "";

  }

  verDetalles = async(contentDetalle:any , rol : Rol ) =>{
    
    this.rolInputDetalles = rol;
    await this.modalService.open( contentDetalle, { ariaLabelledBy: 'modal-basic-title' } )
      .result.then((result=>{

    }));
  }

  eliminar(rol : Rol){

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
        const response = this.rolesService.eliminarRol(rol);

        Swal.fire({
          title : (response.estado == 'ok')?'Éxito':'Error',
          text : response.mensaje,
          icon : (response.estado == 'ok')?'success':'error',
        })
      }
    })    
  }

  registrar(content:any){
    
    this.modalService.open( content, { ariaLabelledBy: 'modal-basic-title' } )
      .result.then((result=>{

    }));
  }

  asignarOpciones(event : Opcion[]){
      this.rolInputDetalles.opciones = event;
  }


}
