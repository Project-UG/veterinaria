import { Component, OnInit, Input } from '@angular/core';
import { FichaMedica } from 'src/app/types/fichaMedica';

@Component({
  selector: 'app-ficha-medica',
  templateUrl: './ficha-medica.component.html',
  styleUrls: ['./ficha-medica.component.css'],
})
export class FichaMedicaComponent implements OnInit {
  @Input() fichaMedica!: FichaMedica;

  constructor() {}

  ngOnInit(): void {}
}
