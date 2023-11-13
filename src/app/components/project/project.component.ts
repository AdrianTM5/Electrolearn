import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  project: any;
  projects: any;
  showProjects: boolean = true;
  constructor(){
    this.projects = [
      {
        title: 'Buzzer',
        description: 'Proyecto para hacer funcionar un Buzzer y que emita sonido.',
        img: '../../../assets/Buzzerjpg.jpg'
      },
      {
        title: 'Semaforo',
        description: 'Proyecto que simula a un semaforo.',
        img: '../../../assets/semaforo.png'
      },
      {
        title: 'Led Chaser Transistor',
        description: 'Proyecto que enciende y apaga leds secuencialmente.',
        img: '../../../assets/led_chaser.png'
      },
      {
        title: 'Detector de nivel de agua',
        description: 'Proyecto para detectar el nivel de agua.',
        img: '../../../assets/Detector.jpg'
      },
      {
        title: 'Sirena de Policia',
        description: 'Proyecto que simula una sirena de policia.',
        img: '../../../assets/police.PNG'
      },
      {
        title: 'Dado electronico',
        description: 'Proyecto que simula la funcionalidad de un dado.',
        img: '../../../assets/dado.jpg'
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/Detector.jpg'
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/police.PNG'
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/dado.jpg'
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/Detector.jpg'
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/police.PNG'
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/dado.jpg'
      }
    ]
  }

  ngOnInit(): void {
    
  }

  setProjectIndex(project:any){
    this.project = project;
  }
}
