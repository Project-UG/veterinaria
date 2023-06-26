import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccionModal } from 'src/app/helpers/enums';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { RolesService } from 'src/app/services/roles.service';
import { UsuariosAdministradoresService } from 'src/app/services/usuarios-administradores.service';
import { Catalogo, CatalogoDetalle } from 'src/app/types/catalogos.interface';
import { Rol } from 'src/app/types/roles.interface';
import { Usuario } from 'src/app/types/usuarios-administradores.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  tituloModal : string = 'Registro de Catálogo'
  accion : string = AccionModal.CREAR;
  catalogoInput !: Catalogo;
  catalogoInputDetalle !: Catalogo;
  usuarios : Usuario[] = [];
  opcion : string = '0';
  busqueda: string = "";
  roles !: Rol[];

  constructor(
    private modalService: NgbModal,
    private usuariosService : UsuariosAdministradoresService,
    private rolesService : RolesService
  ) { }

  async ngOnInit() {
    this.cargarLista();
    this.roles =  await this.rolesService.getRoles();
  }

  cargarLista(){
    this.usuarios = this.usuariosService.getAllUsers();
  }

  capturar(event:any){
   
    this.opcion = event.target.value;

    if(this.opcion == '0'){
      this.cargarLista();
    }

    if(this.opcion == '1'){
        this.usuarios = this.usuariosService.getActivos();
    }

    if(this.opcion == '2'){
        this.usuarios = this.usuariosService.getInactivos();
    }

  }

  asignarRol(event : any , us : Usuario){

    console.log("evento" ,event);

    const rol  = this.rolesService.getRolById(Number(event.target.value));
    us.rol = rol!;

    console.log("rol" ,rol);

    const response = this.usuariosService.editarUsuario(us);

    Swal.fire({
      title : (response.estado == 'ok') ? 'Éxito':'Error',
      text : response.mensaje,
      icon : (response.estado == 'ok') ? 'success':'error'
    });

    this.cargarLista();

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
        //Búsqueda por el username
        case '0':
          this.cargarLista();
        break;
        case '3':
          const search  = this.usuariosService.getUserByUsername(this.busqueda);

          if(search){
            this.usuarios  = [];
            this.usuarios.push(search);
          }

        break;
        // Busca por la descripción
        case '4':
          this.usuarios = this.usuariosService.getByCorreo(this.busqueda);
          if(this.usuarios.length == 0){
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

  eliminar(usuario : Usuario){

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
        const response = this.usuariosService.eliminar(usuario);

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
