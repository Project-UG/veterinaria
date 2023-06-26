import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AppComponent],
<<<<<<< HEAD
  imports: [BrowserModule, AppRoutingModule, SharedModule, NgbModule],
=======
  imports: [BrowserModule, AppRoutingModule, SharedModule,RouterModule],
>>>>>>> 57256f0587e8446d88e2cb8128d1399d697e6b28
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
