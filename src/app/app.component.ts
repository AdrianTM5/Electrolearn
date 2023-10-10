import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electrolearn';
  public estado: boolean;

  constructor(){
    this.estado = false;
  }

  mostrar(){
    this.estado = true;
  }

  ocultar(){
    this.estado = false;
  }
}
