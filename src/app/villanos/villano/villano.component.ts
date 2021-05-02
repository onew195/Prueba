import { VillanoService } from './../villano.service';
import { MessageService } from './../message.service';
import {Component, OnInit} from '@angular/core';
import {Villano} from '../villano';

@Component({
  selector: 'app-villanos',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit{
  selectedVillano?:Villano;
  villanos: Villano[] = [];

  constructor(private villanoService: VillanoService, private MessageService: MessageService) { }

  onSelect(Villan:Villano):void{
    this.selectedVillano = Villan;
    this.MessageService.add(`VillanoComponent: Selected Villan id=${Villan.id}`);
  }
  ngOnInit() {
    this.getVillano();
  }

  getVillano(): void {
    this.villanoService.getVillano()
        .subscribe(villanos => this.villanos = villanos);
  }
  acumular(suma:number, valor: number){
    if(suma==0)
      return valor+1;
    else
      return valor-1;
  }
}
