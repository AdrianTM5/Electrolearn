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
        codes: ["Abre el entorno de desarrollo Arduino IDE.", "Crea un nuevo sketch.", "Utiliza el siguiente código de ejemplo para generar un sonido con el zumbador:", ],
        co: ["int buzzerPin = 2; // Cambia el número del pin según la conexión", "void setup() {", "   pinMode(buzzerPin, OUTPUT);", "}", "void loop() {", "   //Haz sonar el zumbador medio segundo", " tone(buzzerPin, 1000); // Puedes ajustar la frecuencia", "  delay(500); // Puedes ajustar la duración del sonido", "  // Detén el sonido durante medio segundo" , "noTone(buzzerPin);", "  delay(500);", "}"],
        execution: ["Conecta tu Arduino a la computadora.", "Selecciona el tipo de placa y el puerto correctos en el Arduino IDE.", "Carga el programa en el Arduino.", "Desconecta el Arduino de la computadora y aliméntalo con una fuente externa (si es necesario).", "Observa cómo el zumbador emite sonidos según el programa."],
        video: "../../../assets/videos/buzzer.mp4"
      },
      {
        title: 'Semaforo',
        description: 'Proyecto que simula a un semaforo.',
        img: '../../../assets/imgs/semaforo.png',
        materials: ["Arduino Uno o compatible y con el firmware para S4A cargado.", "Una Protoboard más cables.", "3 diodos LED de colores.", "Cuatro resistencias de 330 Ohmios."],
        steps: ["Coloca el Arduino en la Protoboard de manera que ocupe dos líneas.", "Conecta el zumbador pasivo en la Protoboard.", "Asegúrate de que el zumbador tenga dos patitas. Si es así, conéctalo de manera que una patita vaya a un pin digital del Arduino y la otra a un pin de tierra (GND) en la Protoboard."],
        codes: ["Abre el entorno de programación Scratch for Arduino (S4A).", "Asegúrate de que el firmware de S4A esté cargado en tu Arduino.", "Crea un nuevo proyecto en S4A y agrega los bloques necesarios.", "Utiliza bloques de control y eventos para establecer el flujo del semáforo.", "Utiliza bloques de operadores lógicos y comparadores para controlar el cambio de estados del semáforo.", "Asigna los bloques de acción correspondientes para encender y apagar los LED según el estado del semáforo."],
        co: null,
        execution: ["Conecta tu Arduino a la computadora.", "Carga el programa en S4A en el Arduino.", "Ejecuta el programa y observa cómo el semáforo cambia de estado."],
        video: "../../../assets/videos/semaforo.mp4"
      },
      {
        title: 'Led Chaser Transistor',
        description: 'Proyecto que enciende y apaga leds secuencialmente.',
        img: '../../../assets/imgs/led_chaser.png',
        materials: [],
        steps: [],
        codes: [],
        execution: [],
        video: "../../../assets/videos/"
      },
      {
        title: 'Detector de nivel de agua',
        description: 'Proyecto para detectar el nivel de agua.',
        img: '../../../assets/imgs/Detector.jpg',
        materials: [],
        steps: [],
        codes: [],
        execution: [],
        video: "../../../assets/videos/"
      },
      {
        title: 'Sirena de Policia',
        description: 'Proyecto que simula una sirena de policia.',
        img: '../../../assets/imgs/police.PNG',
        materials: ["2 Circuitos Integrados NE555 (con sus respectivas bases de 8 pines)", "Potenciómetros de 100kΩ.", "1 Condensador electrolítico de 470uF/16v.", "1 Condensador Electrolítico de 47uF/16v.", "1 Condensador Cerámico 104.", "1 Condensador Cerámico 103.", "1 Resistencia de 2.2kΩ.", "1 Resistencia de 2.7kΩ.", "1 Resistencia de 1kΩ.", "1 Resistencia de 8.2kΩ.", "1 Transistor BC548 (NPN)", "1 Transistor 2N3055 (NPN)", "2 Borneras de 2 pines ( una para la entrada de voltaje DC y la otra bornera para conectar la bocina)", "1 Parlante o bocina de 8Ω o de 4Ω.", "1 Fuente de alimentación de 5v hasta 12v , pueden alimentarlo con una pila de 9v."],
        steps: ["Conecta los dos circuitos integrados NE555 a la protoboard.", "Conecta los potenciómetros de 100kΩ a los pines 6 de cada NE555 (el pin de umbral) para controlar la frecuencia de los temporizadores.", "Conecta los condensadores electrolíticos de 470uF/16V y 47uF/16V a los pines 2 de cada NE555 (el pin de descarga).", "Conecta los condensadores cerámicos (104 y 103) a los pines 5 de cada NE555 (el pin de control de voltaje).", "Conecta las resistencias de 2.2kΩ y 2.7kΩ entre el pin 7 y el pin 6 de cada NE555.", "Conecta la resistencia de 1kΩ entre el pin 6 del primer NE555 y el pin 2 del segundo NE555.", "Conecta la resistencia de 8.2kΩ entre el pin 6 del segundo NE555 y el pin 2 del primer NE555.", "Conecta el transistor BC548 (NPN) al pin 3 del primer NE555 y el transistor 2N3055 (NPN) al pin 3 del segundo NE555.", "Conecta las borneras: una para la entrada de voltaje DC y la otra para conectar la bocina.", "Conecta el parlante o bocina de 8Ω o 4Ω a la bornera destinada para la bocina.", "Conecta la fuente de alimentación de 5V a 12V a la bornera destinada para la entrada de voltaje DC."],
        codes: ["Para este tipo de circuito analógico, no necesitas un código específico en S4A. La generación del sonido se controla mediante la configuración de los componentes analógicos en la protoboard."],
        execution: ["Alimenta el circuito con la fuente de alimentación.", "Ajusta los potenciómetros para controlar la frecuencia de la sirena.", "Deberías escuchar la sirena de policía desde el parlante conectado."],
        video: "../../../assets/videos/policia.mp4"
      },
      {
        title: 'Dado electronico',
        description: 'Proyecto que simula la funcionalidad de un dado.',
        img: '../../../assets/imgs/dado.jpg',
        materials: [],
        steps: [],
        codes: [],
        execution: [],
        video: "../../../assets/videos/"
      },
      {
        title: 'Temporizador',
        description: 'Proyecto que hace la función de un temporizador, con duración de 5 a 30 minutos',
        img: '../../../assets/imgs/temporizador.png',
        materials: ["1 CI temporizador 7555. Versión CMOS el CI 555 (IC1)", "1 transistor NPN 2N2222 o similar (Q1)", "1 diodo 1N4001 o similar (D1)", "6 resistencias de 8.2 M (Megaohmios)  (R1, R2, R3, R4, R5, R6)", "1 resistencia de 100K (R8)", "1 resistencia de 4.7 K (R7)", "1 resistencia de 4.7 K (R7)", "1 condensador de 100 nF (nanofaradios) (C2)", "1 relé de voltaje igual al de la fuente de alimentación (RL)", "1 interruptor de contacto momentáneo normalmente abierto (NA) (S)"],
        steps: ["Conecta el temporizador 7555 (IC1) en la protoboard.", "Conecta el transistor NPN 2N2222 (Q1) con el colector al pin 3 del temporizador 7555, el emisor a tierra y la base a través de una resistencia de 4.7kΩ (R7) al pin 2 del temporizador.", "Conecta el diodo 1N4001 (D1) en paralelo al relé (RL), con el cátodo al colector del transistor.", "Conecta las seis resistencias de 8.2 Megaohmios (R1, R2, R3, R4, R5, R6) entre el pin 6 (THR) y el pin 7 (DIS) del temporizador 7555.", "Conecta la resistencia de 100kΩ (R8) entre el pin 6 (THR) del temporizador y el pin 8 (VCC).", "Conecta el condensador de 33uF (C1) entre el pin 6 (THR) y el pin 1 (GND) del temporizador.", "Conecta el condensador de 100nF (C2) entre el pin 5 (CV) y el pin 1 (GND) del temporizador.", "Conecta el interruptor de contacto momentáneo normalmente abierto (S) entre el pin 2 (TRIG) y el pin 1 (GND) del temporizador."],
        execution: ["El tiempo de temporización se puede ajustar variando la resistencia total entre el pin 6 (THR) y el pin 7 (DIS) mediante el interruptor S.", "Ajusta el interruptor S para iniciar el temporizador.", "El temporizador generará un pulso de salida después de un período de tiempo ajustado por los valores de las resistencias R1-R6 y del condensador C1 y C2.", "Este pulso activará el transistor Q1, cerrando el circuito del relé y activando el dispositivo conectado al relé (por ejemplo, una luz, alarma, etc.)."],
        video: "../../../assets/videos/temporizador.mp4"
      },
      {
        title: 'Indicador de fusible quemado',
        description: 'Proyecto que indica mediante un led si hay un fusible quemado',
        img: '../../../assets/imgs/fusible.jpg',
        materials: ["1 transistor bipolar PNP BC558, NTE159 o similar (Q1)", "1 transistor bipolar PNP BC558, NTE159 o similar (Q1)", "1 LED de color rojo", "1 resistencia 510 ohmios (R1)", "1 resistencia de 100 K (R2)"],
        steps: ["Conecta el transistor PNP (BC558) en la protoboard.", "Conecta el diodo (1N4001 o 1N4148) con el ánodo al emisor del transistor (Q1) y el cátodo a tierra.", "Conecta el LED rojo con el ánodo a través de una resistencia de 510 ohmios (R1) al colector del transistor (Q1) y el cátodo a tierra.", "Conecta una resistencia de 100K (R2) entre la base del transistor (Q1) y la línea de voltaje (Vcc).", "Conecta el colector del transistor (Q1) al lado del fusible que deseas monitorear (conecta a través de una resistencia adecuada según la aplicación si es necesario).", "Cuando el fusible está intacto, la corriente fluye y el transistor PNP (Q1) está en corte, el LED no se encenderá.", "Si el fusible se quema, el transistor se satura, permitiendo que la corriente fluya a través del LED y lo encienda, indicando que el fusible está quemado."],
        execution: ["Aplica alimentación al circuito y verifica que el LED esté apagado cuando el fusible esté en buen estado.", "Simula un fusible quemado (por ejemplo, desconectando la alimentación del circuito que está monitoreando) y verifica que el LED se encienda para indicar que el fusible está quemado."],
        video: "../../../assets/videos/fusible.mp4"
      },
      {
        title: 'Led frenos de auto',
        description: 'Proyecto que simula las luces de un automovil cuando se presiona el pedal de los frenos',
        img: '../../../assets/imgs/auto.jpg',
        materials: ["1 resistencia de 10K 1/4 watt (R1)", "1 resistencia de 33 ohmios 1/4 watt (R2)", "1 resistencia de 15 ohmios 1/4 watt (R3)", "1 diodo Schottky BAT46 o similar (D1)", "12 LEDs, alto brillo, de alta eficiencia color rojo (D2 – D13)", "1 transistor NPN BC547 o similar (Q1)", "●	1 transistor NPN BC337 o similar (Q2)", "1 interruptor de luz trasera SW1 SPST", "1 interruptor de luz de freno SW2 SPST"],
        steps: ["Conecta el interruptor de luz trasera (SW1) entre la línea de alimentación de las luces traseras del automóvil y el emisor del transistor NPN Q1 (BC547).", "Conecta el interruptor de luz de freno (SW2) entre la línea de alimentación de las luces de freno del automóvil y el emisor del transistor NPN Q2 (BC337).", "Conecta la resistencia de 10K (R1) entre el colector de Q1 y el cátodo del diodo Schottky (D1).", "Conecta la resistencia de 33 ohmios (R2) entre el cátodo de D1 y la base de Q1.", "Conecta la resistencia de 15 ohmios (R3) entre la base de Q1 y la línea de alimentación de las luces de freno.", "Conecta los LEDs rojos (D2-D13) en paralelo, con los ánodos conectados al cátodo de D1 y los cátodos conectados a tierra.", "Conecta el colector de Q2 al cátodo de D1.", "Conecta el colector de Q1 al cátodo de D1 y al ánodo de Q2.", "Conecta la base de Q2 al ánodo de D1.", "Conecta el emisor de Q2 a tierra."],
        execution: ["Cuando las luces traseras están encendidas, el circuito permitirá que los LEDs se iluminen a una intensidad más baja.", "Cuando se activan las luces de freno, el circuito aumentará la intensidad de los LEDs, indicando que se están aplicando los frenos.", "Prueba el circuito en un entorno seguro antes de instalarlo en un vehículo.", "Verifica que los LEDs se iluminen a baja intensidad cuando solo están encendidas las luces traseras y a máxima intensidad cuando se aplican los frenos."],
        video: "../../../assets/videos/auto.mp4"
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/imgs/Detector.jpg',
        materials: [],
        steps: [],
        codes: [],
        execution: [],
        video: "../../../assets/videos/"
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/imgs/police.PNG',
        materials: [],
        steps: [],
        codes: [],
        execution: [],
        video: "../../../assets/videos/"
      },
      {
        title: '-',
        description: '-',
        img: '../../../assets/imgs/dado.jpg',
        materials: [],
        steps: [],
        codes: [],
        execution: [],
        video: "../../../assets/videos/"
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
