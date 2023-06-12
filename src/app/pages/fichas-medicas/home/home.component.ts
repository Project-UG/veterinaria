import { Component, OnInit, inject } from '@angular/core';
import { FichaMedicaService } from 'src/app/services/fichaMedica.service';
import { FichaMedica } from 'src/app/types/fichaMedica';
@Component({
  selector: 'app-fichas-medicas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class FichasMedicasHomeComponent implements OnInit {
  fichaMedicaService: FichaMedicaService = inject(FichaMedicaService);

  listaFichasMedicas: FichaMedica[] = [];

  constructor() {
    this.fichaMedicaService
      .getAll()
      .then((fichasMedicas) => (this.listaFichasMedicas = fichasMedicas));
  }

  ngOnInit(): void {}
}
