import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  heroesOlvidados: string = '';
  
  borrarHeroe(): void {
    let borrado = this.heroes.pop() || '';
    this.heroesOlvidados = borrado;
  }
}
