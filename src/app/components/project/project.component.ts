import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects: any = [
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

  closeModal() {
    const modalDiv = document.getElementById('myModal');
    if(modalDiv != null) {
      modalDiv.style.display = 'none';
   }
  }

  sendDetails(project:any){
    
    const modalDiv = document.getElementById('myModal');
    if(modalDiv != null) {
      modalDiv.style.display = 'block';
   }
  }

}
