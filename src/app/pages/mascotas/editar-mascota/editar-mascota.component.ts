import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
