import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  project: any;
  projects: any;
  constructor(public app: AppComponent){
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
        execution: ["Conecta tu Arduino a la computadora.", "Carga el programa en S4A en el Arduino.", "Ejecuta el programa y observa cómo el semáforo cambia de estado."],
        video: "../../../assets/videos/semaforo.mp4"
      },
      {
        title: 'Medidor de carga de pilas',
        description: 'Proyecto que indica la carga de una pila.',
        img: '../../../assets/imgs/pila.PNG',
        materials: ["Arduino UNO o cualquier placa de Arduino", "Protoboard donde conectaremos los componentes", "Cables para la conexión entre los componentes y la placa", "3 resistencias de 220 Ω", "1 resistencia de 10 kΩ", "1 LED rojo de 5 mm", "1 LED amarillo de 5 mm", "1 LED verde de 5 mm"],
        steps: ["Vamos a ver como se han conectado los componentes. Lo primero son los LEDs. Cada uno está conectado en serie con una resistencia de 220 Ω para alargar la vida útil de los mismos. El LED verde está conectado al pin 2, el LED amarillo está conectado al pin 3 y LED rojo está conectado al pin 4. Esto es importante recordarlo para cuando veamos la programación.", "Para medir la batería he colocado una resistencia pull-down. Este tipo de resistencia lo que hace es mantener un estado lógico bajo es decir, a 0V. Es importante utilizar este tipo de resistencias ya que, cuando no tengamos la batería o pila conectada para medir, tenemos un estado indeterminado a la entrada del pin analógico, lo que hace que oscile y puede que hasta que se encienda algún LED. Puedes probar a quitar esta resistencia y verás el resultado.", "El polo positivo de la batería lo conectamos a la resistencia de pull-down y a la entrada analógica A0. El otro extremo de la resistencia a tierra. Por último, el polo negativo de la batería debemos conectarlo a la tierra de Arduino."],
        codes: ["Leer el pin analógico donde tenemos conectada la pila", "Calculamos el voltaje para el valor que nos ha dado", "Evaluamos el voltaje", "Encendemos los LEDs correspondientes", "Apagamos todos los LEDs"],
        co: ["// Pines para los LEDs", "#define LEDVERDE 2", "#define LEDAMARILLO 3", "#define LEDROJO 4", "#define ANALOGPILA 0", "// Variables", "int analogValor = 0;", "float voltaje = 0;", "int ledDelay = 800;", "// Umbrales", "float maximo = 1.6;", "float medio = 1.4;", "float minimo = 0.3;", "void setup() {", "  // Iniciamos el monitor serie", "  Serial.begin(9600);", "  // Los pines de LED en modo salida", "  pinMode(LEDVERDE, OUTPUT);", "  pinMode(LEDAMARILLO, OUTPUT);", "  pinMode(LEDROJO, OUTPUT);", "}", "void loop() {", "  // Leemos valor de la entrada analógica", "  analogValor = analogRead(ANALOGPILA);", "  // Obtenemos el voltaje", "  voltaje = 0.0048 * analogValor;", "  Serial.print('Voltaje: ');", "  Serial.println(voltaje);", "  // Dependiendo del voltaje mostramos un LED u otro", "  if (voltaje >= maximo)", "  {", "    digitalWrite(LEDVERDE, HIGH);", "    delay(ledDelay);", "    digitalWrite(LEDVERDE, LOW);", "  }", "  else if (voltaje < maximo && voltaje > medio)", "  {", "    digitalWrite(LEDAMARILLO, HIGH);", "    delay(ledDelay);", "    digitalWrite(LEDAMARILLO, LOW);", "  }", "  else if (voltaje < medio && voltaje > minimo)", "  {", "    digitalWrite(LEDROJO, HIGH);", " delay(ledDelay);", " digitalWrite(LEDROJO, LOW);", "  }", "  // Apagamos todos los LEDs", "  digitalWrite(LEDVERDE, LOW);", "  digitalWrite(LEDAMARILLO, LOW);", "  digitalWrite(LEDROJO, LOW);", "}"],
        video: "../../../assets/videos/pila.mp4"
      },
      {
        title: 'Detector de nivel de agua',
        description: 'Proyecto para detectar el nivel de agua.',
        img: '../../../assets/imgs/Detector.jpg',
        materials: ["Arduino Uno", "Sensor de nivel liquido KY-033", "Cables de conexión/Jumpers macho-macho", "Protoboard", "Fuente de energia de 9v (cargador o bateria)", "Adaptador en dado caso que se opte por una bateria"],
        steps: ["Conecta el pin de detección del sensor de nivel de líquido a un pin digital del Arduino.", "Conecta el pin de tierra del sensor al GND del Arduino.", "Conecta el Arduino a una fuente de energía."],
        codes: [],
        co: ["// Definición de pines", "int sensorPin = 2; // Pin conectado al sensor de nivel de líquido", "void setup() {", "  pinMode(sensorPin, INPUT);//Configura pin del sensor como entrada", "  Serial.begin(9600); // Inicia la comunicación para ver resultados", "}", "void loop() {", "  int sensorValue = digitalRead(sensorPin);//Lee el valor del sensor", "  if (sensorValue == HIGH) {", "    Serial.println('¡Hay agua!'); //Mensaje si se detecta agua", "  } else {", "    Serial.println('No hay agua.'); //Mensaje si no se detecta agua", "  }", "  delay(1000); // Espera un momento para la siguiente lectura", "}"],
        video: "../../../assets/videos/detector.mp4"
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
        materials: ["Arduino Uno", "Display de 7 segmentos", "Resistencias de 220 ohmios", "Botón o pulsador", "Protoboard", "Cables de conexión/Jumpers macho-macho"],
        steps: ["Conecta cada pin de tu display de 7 segmentos a pines digitales del Arduino, asegurándote de usar resistencias para limitar la corriente.", "Conecta el botón a un pin digital del Arduino y a tierra. Dependiendo de cómo quieras configurarlo, puedes usar una resistencia pull-up o pull-down."],
        codes: [],
        co: ["// Definición de pines", "int buttonPin = 2; // Pin del botón", "int displayPins[]={3,4,5,6,7,8,9};//Pines conectados (a,b,c,d,e,f,g)", "// Variables", "int randomNumber;//Variable para el número aleatorio generado", "bool buttonState = false; // Estado del botón", "void setup() {", "  // Inicialización de pines", "  pinMode(buttonPin, INPUT);", "  for (int i = 0; i < 7; i++) {", "    pinMode(displayPins[i], OUTPUT);", "  }", "}", "void loop() {", "  buttonState = digitalRead(buttonPin); //Lee el estado del botón", "  if (buttonState == HIGH) { //Si se presiona el botón", "    randomNumber=random(1, 7);//Genera un número random del 1 al 6", "    displayNumber(randomNumber);//Muestra el número en el display", "    delay(1000);//Espera antes de permitir otro lanzamiento", "  }", "}", "//Función para mostrar el número en el display", "void displayNumber(int number) {", "//Establece los pines del display según el número a mostrar", "  //Esto puede variar por la configuración de tu display específico", "  //Por ejemplo, para mostrar el número 1, se encienden 'b' y 'c'", "  switch (number) {", "    case 1:", "      digitalWrite(displayPins[0], HIGH);//a", "      digitalWrite(displayPins[1], LOW);//b", "      digitalWrite(displayPins[2], LOW);//c", "      digitalWrite(displayPins[3], HIGH);//d", "      digitalWrite(displayPins[4], HIGH);//e", "      digitalWrite(displayPins[5], HIGH);//f", "      digitalWrite(displayPins[6], HIGH);//g", "      break;", "    //...casos para los números restantes", "    //Aquí debes incluir los patrones de encendido para cada número", "  }", "}"],
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
        title: 'Sensor ultrasonidos',
        description: 'Proyecto que detecta ultra sonidos emitidos por otro dispositivo',
        img: '../../../assets/imgs/sensor.PNG',
        materials: ["Arduino UNO", "Protoboard donde conectaremos los componentes", "Cables para hacer las conexiones", "3 resistencias de 220 Ω", "1 LED verde", "1 LED amarillo", "1 LED rojo", "1 sensor ultrasónico Arduino (HC-SR04)", "1 buzzer"],
        codes: ["Vamos a empezar por la programación. Lo primero es una breve descripción de lo que queremos conseguir. Esto nos ayudará a plantear el problema general y posteriormente dividirlo en trozos más pequeños. A esto se le llama pensamiento computacional y si eres usuario asiduo de este blog, ya estarás familiarizado con este concepto.", "El sistema de aparcamiento consiste en detectar un objeto a través del sensor ultrasónico y avisar con señales de luz y sonido. Por lo tanto, ya tenemos la primera división, detectar el obstáculo y alertas con sonido y luces."],
        co: ["// Pines utilizados", "#define LEDVERDE 2", "#define LEDAMARILLO 3", "#define LEDROJO 4", "#define TRIGGER 5", "#define ECHO 6", "#define BUZZER 9", "// Constantes", "const float sonido = 34300.0; // Velocidad del sonido en cm/s", "const float umbral1 = 30.0;", "const float umbral2 = 20.0;", "const float umbral3 = 10.0;", "void setup() {", "  // Iniciamos el monitor serie", "  Serial.begin(9600);", "  // Modo entrada/salida de los pines", "  pinMode(LEDVERDE, OUTPUT);", "  pinMode(LEDAMARILLO, OUTPUT);", "  pinMode(LEDROJO, OUTPUT);", "  pinMode(ECHO, INPUT);", "  pinMode(TRIGGER, OUTPUT);", "  pinMode(BUZZER, OUTPUT);", " // Apagamos todos los LEDs", "  apagarLEDs();", "}", "// Apaga todos los LEDs", "void apagarLEDs()", "{", "  // Apagamos todos los LEDs", "  digitalWrite(LEDVERDE, LOW);", "  digitalWrite(LEDAMARILLO, LOW);", "  digitalWrite(LEDROJO, LOW);", "}", "void loop() {", "  // Preparamos el sensor de ultrasonidos", "  iniciarTrigger();", "  // Obtenemos la distancia", "  float distancia = calcularDistancia();", "  // Apagamos todos los LEDs", " apagarLEDs();", "  // Lanzamos alerta si estamos dentro del rango de peligro", "  if (distancia < umbral1)", " {", "    // Lanzamos alertas", "    alertas(distancia);", " }", "}", "// Método que inicia la secuencia del Trigger para comenzar a medir", "void iniciarTrigger()", "{", "  // Ponemos el Triiger en estado bajo y esperamos 2 ms", "  digitalWrite(TRIGGER, LOW);", "  delayMicroseconds(2);", "  // Ponemos el pin Trigger a estado alto y esperamos 10 ms", "  digitalWrite(TRIGGER, HIGH);", "  delayMicroseconds(10);", "  // Comenzamos poniendo el pin Trigger en estado bajo", " digitalWrite(TRIGGER, LOW);", "}", "// Método que calcula la distancia a la que se encuentra un objeto.", "// Devuelve una variable tipo float que contiene la distancia", "float calcularDistancia()", "{", " unsigned long tiempo = pulseIn(ECHO, HIGH);", "float distancia = tiempo * 0.000001 * sonido / 2.0;", "Serial.print(distancia);", "Serial.print('cm');", "Serial.println();", "delay(500);", "return distancia;", "}", "void alertas(float distancia)", "{", "  if (distancia < umbral1 && distancia >= umbral2)", "{", "    // Encendemos el LED verde", "    digitalWrite(LEDVERDE, HIGH);", "   tone(BUZZER, 2000, 200);", " }", "else if (distancia < umbral2 && distancia > umbral3)", " {", "    digitalWrite(LEDAMARILLO, HIGH);", "     tone(BUZZER, 2500, 200);", "  }", "  else if (distancia <= umbral3)", "  {", "    digitalWrite(LEDROJO, HIGH);", "    tone(BUZZER, 3000, 200);", "  }", "}"],
        video: "../../../assets/videos/sensor.mp4"
      },
      {
        title: 'Himno de España',
        description: 'Proyecto que toca mediante un buzzer el himno de España',
        img: '../../../assets/imgs/españa.PNG',
        materials: ["Placa de arduino UNO", "Protoboard", "Cables macho-hembra", "Buzzer pasivo"],
        steps: ["Una de las partes más importantes a la hora de realizar nuestro montaje del zumbador pasa por conectar correctamente los diferentes elementos.", "En este caso, el montaje es muy simple pero para que el código funcione correctamente, es necesario que los pines vayan conectados en la misma posición que se muestra en el esquema mostrado a continuación.", ""],
        codes: ["A continuación  se muestra el código de programación desarrollado específicamente para este proyecto. Los pines que puedes encontrar en el código son los mismos que encontrarás en el esquema de conexiones previamente mostrado."],
        co: ["#define DO 523.25", "#define RE 587.33", "#define MI 659.26", "#define FA 698.46", "#define SOL 783.99", "#define LA 880", "#define SI 987.77", "#define RE2 1174.66", "#define RE2 1174.66", "#define DO2 1062", "#define DoS 554.37", "#define RES 622.25", "#define FAS 739.99", "#define SOLS 830.61", "#define FAS2 1479.98", "#define a 1000", "#define b 500", "void setup() {", "pinMode(8,OUTPUT);", "}", "void loop() { ", "  tone(8, SOL , a);", " delay(500);", " noTone(8);", "  tone(8, RE , a);", "  delay(500);", " noTone(8);", " tone(8, SI , a);", " delay(500);", " noTone(8);", " tone(8, SOL, b);", " delay(500);", " noTone(8);", " tone(8, RE2 , b);", " delay(400);", "noTone(8);", "tone(8, DO2 , b);", " delay(400);", "noTone(8);", "tone(8, SI , b);", " delay(400);", "noTone(8);", "tone(8, LA , b);", " delay(400);", "noTone(8);", "tone(8, SOL , b);", " delay(400);", "noTone(8);", "tone(8, SOL , b);", " delay(400);", "noTone(8);", "tone(8, FAS , b);", " delay(400);", " delay(1000);", "}"],
        video: "../../../assets/videos/españa.mp4"
      },
      {
        title: 'Matriz LED controlada con joystick',
        description: 'Proyecto con el cual se puede controlar mediante un Joystick una matriz LED',
        img: '../../../assets/imgs/joystick.PNG',
        materials: ["Placa de Arduino UNO", "Joystick", "Protoboard", "Cables macho-hembra", "Matriz LED"],
        codes: ["A continuación se muestra el código de programación desarrollado específicamente para este proyecto. Los pines que puedes encontrar en el código son los mismos que encontrarás en el esquema de conexiones previamente mostrado."],
        co: ["#include 'LedControl.h'", "LedControl lc=LedControl(12,10,11,1);", "const int SW_pin = 2;", "const int xpin = 0;", "const int ypin = 1;", "int filas=4, col=4;", "void setup() {", "  pinMode(SW_pin, INPUT);", "  digitalWrite(SW_pin, HIGH);", "  Serial.begin(9600);", "  lc.shutdown(0,false);", "  lc.setIntensity(0,8);", "  lc.clearDisplay(0);", "}", "void loop() {", "  if(digitalRead(SW_pin) == 0){", "    Serial.print('click');", "    Serial.print('\n');", "    lc.clearDisplay(0);", "    filas=4;", "    col=4;", "    lc.setLed(0,col,filas,true);", "}", "  else if(analogRead(xpin)>525 && filas<7){", "    Serial.print('derecha');", "    Serial.print('\n');", "    filas++;", "    lc.setLed(0,col,filas,true);", "}", " else if(analogRead(xpin)<510 && filas > 0){", "   Serial.print('izquierda');", "    Serial.print('\n');", "    filas--;", "    lc.setLed(0,col,filas,true);", "}", "  else if(analogRead(ypin)>520 && col < 7){", "    Serial.print('abajo');", "    Serial.print('\n');", "    col++;", "    lc.setLed(0,col,filas,true);", "  }", "  else if(analogRead(ypin)<500 && col > 0){", "    Serial.print('arriba');", "    Serial.print('\n');", " col--;", " lc.setLed(0,col,filas,true);", " }", "  Serial.print('\n\n');", "  delay(100);", "}"],
        video: "../../../assets/videos/españa.mp4"
      }
    ]
  }

  setProjectIndex(project:any){
    this.project = project;
  }
}
