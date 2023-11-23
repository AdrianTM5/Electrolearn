import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electrolearn';
  public showProjects: boolean;

  constructor(){
    this.showProjects = true;
  }

  mostrar(){
    this.showProjects = true;
    console.log(this.showProjects)
  }

  ocultar(){
    this.showProjects = false;
  }

  changeView(){
    this.showProjects = !this.showProjects
  }

  closeModal() {
    const modalDiv = document.getElementById('myModal');
    if(modalDiv != null) {
      modalDiv.style.display = 'none';
   }
  }
}
