import { HeroeComponent } from './heroe/heroe.component';

import { ListadoComponent } from './Listado/Listado.component';
import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
@NgModule({
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],
  exports:[
    HeroeComponent,
    ListadoComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule {

}
