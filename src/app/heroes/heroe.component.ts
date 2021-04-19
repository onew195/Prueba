import {Component, OnInit} from '@angular/core';

@Component{{
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['.heroe.component.css']
}}
export class HeroeComponent {
  nombre: string = 'Saitama';
  edad: number = 30;
}

