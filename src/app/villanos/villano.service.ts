import { Injectable } from '@angular/core';

import { Villano } from './villano';
import { VILLANO } from './mock-villano';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class VillanoService {

  getVillano(): Observable<Villano[]> {
    const villanos = of(VILLANO);
    this.MessageService.add('VillanoService: fetched villanos');
    return villanos;
  }
  constructor(private MessageService: MessageService) { }
}
