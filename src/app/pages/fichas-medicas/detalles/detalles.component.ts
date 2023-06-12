import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FichaMedicaService } from 'src/app/services/fichaMedica.service';
import { FichaMedica } from 'src/app/types/fichaMedica';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  fichaMedicaService: FichaMedicaService = inject(FichaMedicaService);
  fichaMedicaId = parseInt(this.route.snapshot.params['id'], 10);
  fichaMedica!: FichaMedica;
  constructor() {}

  async ngOnInit(): Promise<void> {
    this.fichaMedica = await this.fichaMedicaService.getById(
      this.fichaMedicaId
    );
  }
}
