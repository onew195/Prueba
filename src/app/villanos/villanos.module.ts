import { VillanoComponent } from './villano/villano.component';

import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations:[
    VillanoComponent
  ],
  exports:[
    VillanoComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ]
})
export class VillanoModule {

}
