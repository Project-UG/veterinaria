import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  completeSideBar: boolean;

  constructor() {
    this.completeSideBar = true;
  }

  ngOnInit(): void {}

  modifySideBarView() {
    this.completeSideBar = !this.completeSideBar;
  }
}
