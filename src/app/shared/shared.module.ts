import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SidebarComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, FooterComponent],
})
export class SharedModule {}
