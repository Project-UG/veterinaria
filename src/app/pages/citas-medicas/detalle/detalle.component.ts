import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitaMedicaService } from 'src/app/services/citaMedica.service';
import { CitaMedica } from 'src/app/types/citaMedica';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute);
  citaMedicaService: CitaMedicaService = inject(CitaMedicaService);
  citaMedicaId = parseInt(this.route.snapshot.params['id'], 10);
  citaMedica!: CitaMedica;
  constructor() {}

  async ngOnInit(): Promise<void> {
    this.citaMedica = await this.citaMedicaService.getById(
      this.citaMedicaId
    );
  }

}
