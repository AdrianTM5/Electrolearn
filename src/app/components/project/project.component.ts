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
  showInformation: boolean = false;
  constructor(){
    this.projects = [
      {
        title: 'Buzzer',
        description: 'Proyecto para hacer funcionar un Buzzer y que emita sonido.',
        img: '../../../assets/Buzzerjpg.jpg',
        materials: ["Arduino UNO o placa compatible", "Protoboard o placa de pruebas", "Zumbador Pasivo", "Cables o Jumpers"],
        steps: ["Coloca el Arduino en la Protoboard de manera que ocupe dos líneas.", "Conecta el zumbador pasivo en la Protoboard.", "Asegúrate de que el zumbador tenga dos patitas. Si es así, conéctalo de manera que una patita vaya a un pin digital del Arduino y la otra a un pin de tierra (GND) en la Protoboard."]
      },
      {
        title: 'Semaforo',
        description: 'Proyecto que simula a un semaforo.',
        img: '../../../assets/semaforo.png',
        materials: ["Arduino Uno o compatible y con el firmware para S4A cargado.", "Una Protoboard más cables.", "3 diodos LED de colores.", "Cuatro resistencias de 330 Ohmios."],
        steps: ["Coloca el Arduino en la Protoboard de manera que ocupe dos líneas.", "Conecta los diodos LED en la Protoboard, asegurándose de conectar el ánodo (patita larga) de cada LED a un pin digital del Arduino y el cátodo (patita corta) a través de una resistencia de 330 Ohmios a tierra (GND) en la Protoboard.", "Conecta las resistencias de 330 Ohmios a tierra en la Protoboard y el otro extremo a los pines digitales del Arduino que estén conectados a los cátodos de los diodos LED."]
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

  changeView(){
    this.showProjects = !this.showProjects
    this.showInformation = !this.showInformation
  }

  setProjectIndex(project:any){
    this.project = project;
  }
}
