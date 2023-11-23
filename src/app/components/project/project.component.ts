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
        img: '../../../assets/imgs/Buzzerjpg.jpg',
        materials: ["Arduino UNO o placa compatible", "Protoboard o placa de pruebas", "Zumbador Pasivo", "Cables o Jumpers"],
        steps: ["Coloca el Arduino en la Protoboard de manera que ocupe dos líneas.", "Conecta el zumbador pasivo en la Protoboard.", "Asegúrate de que el zumbador tenga dos patitas. Si es así, conéctalo de manera que una patita vaya a un pin digital del Arduino y la otra a un pin de tierra (GND) en la Protoboard."],
        codes: ["Abre el entorno de programación Scratch for Arduino (S4A).", "Asegúrate de que el firmware de S4A esté cargado en tu Arduino.", "Crea un nuevo proyecto en S4A y agrega los bloques necesarios.", "Utiliza bloques de control y eventos para establecer el flujo del semáforo.", "Utiliza bloques de operadores lógicos y comparadores para controlar el cambio de estados del semáforo.", "Asigna los bloques de acción correspondientes para encender y apagar los LED según el estado del semáforo."],
        execution: ["Conecta tu Arduino a la computadora.", "Carga el programa en S4A en el Arduino.", "Ejecuta el programa y observa cómo el semáforo cambia de estado."],
        video: "../../../assets/videos/semaforo.mp4"
      },
      {
        title: 'Semaforo',
        description: 'Proyecto que simula a un semaforo.',
        img: '../../../assets/imgs/semaforo.png',
        materials: ["Arduino Uno o compatible y con el firmware para S4A cargado.", "Una Protoboard más cables.", "3 diodos LED de colores.", "Cuatro resistencias de 330 Ohmios."],
        steps: ["Coloca el Arduino en la Protoboard de manera que ocupe dos líneas.", "Conecta los diodos LED en la Protoboard, asegurándose de conectar el ánodo (patita larga) de cada LED a un pin digital del Arduino y el cátodo (patita corta) a través de una resistencia de 330 Ohmios a tierra (GND) en la Protoboard.", "Conecta las resistencias de 330 Ohmios a tierra en la Protoboard y el otro extremo a los pines digitales del Arduino que estén conectados a los cátodos de los diodos LED."]
      },
      {
        title: 'Led Chaser Transistor',
        description: 'Proyecto que enciende y apaga leds secuencialmente.',
        img: '../../../assets/imgs/led_chaser.png'
      },
      {
        title: 'Detector de nivel de agua',
        description: 'Proyecto para detectar el nivel de agua.',
        img: '../../../assets/imgs/Detector.jpg'
      },
      {
        title: 'Sirena de Policia',
        description: 'Proyecto que simula una sirena de policia.',
        img: '../../../assets/imgs/police.PNG'
      },
      {
        title: 'Dado electronico',
        description: 'Proyecto que simula la funcionalidad de un dado.',
        img: '../../../assets/imgs/dado.jpg'
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/imgs/Detector.jpg'
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/imgs/police.PNG'
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/imgs/dado.jpg'
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/imgs/Detector.jpg'
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/imgs/police.PNG'
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/imgs/dado.jpg'
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
