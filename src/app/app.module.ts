import { VillanoModule } from './villanos/villanos.module';
import { ContadorModule } from './contador/contador.module';

import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule,
    VillanoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
