import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  heroes: string[] = ['hulk', 'Saitama', 'Superman', 'thor', 'goku'];
  borrado: string|undefined;

  borrarElemento(): void{
    this.borrado = this.heroes.pop();
  }
  mostrar(): String {
    if(this.borrado!="")
      return this.borrado+" eliminado";
    else
      return this.borrado;
  }
}
