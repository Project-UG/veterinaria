import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    const fichaMedicaId = parseInt(this.route.snapshot.params['id'], 10);
  }

  ngOnInit(): void {}
}
