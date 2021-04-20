import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  nombre: string = 'Saitama';
  edad: number = 30;
  obtenerNombre(): string{
    return this.nombre+' - '+ this.edad;
  }
  cambiarNombre(): void{
    this.nombre = 'Superman';
  }
  cambiarEdad(): void{
    this.edad=38;
  }
  get nombreMayusculas():String{
    return this.nombre.toUpperCase();
  }
}


