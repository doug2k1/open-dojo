/**
* Espera "verde / vermelho na serial para acender e apagar um led"
*/

#include<string.h>
#define _COR_VERDE '2'
#define _COR_VERMELHA '1'

char inData[64];
char inChar=-1;

int fioBranco = 11;
int fioAzul   = 10;
int fioCinza  = 9;
int fioRoxo   = 6;

int lastColor = 9;

void setup(){
  pinMode(fioBranco,OUTPUT);
  pinMode(fioAzul,  OUTPUT);
  pinMode(fioCinza, OUTPUT);
  pinMode(fioRoxo,  OUTPUT);

  Serial.begin(57600);
  while (!Serial); // wait for serial port to connect. Needed for Leonardo only
   Serial.println("Waiting...\n");
}

void loop(){
    byte numBytesAvailable= Serial.available();

    // if there is something to read
    if (numBytesAvailable > 0){
        // store everything into "inData"
        int i;
        for (i=0;i<numBytesAvailable;i++){
            inChar= Serial.read();
            inData[i] = inChar;
        }

        inData[i] = '\0';
        Serial.print("Arduino Received: ");
        Serial.println(inData);
//        transita(inChar);
        if (inChar == _COR_VERDE){
          corVerde();
          Serial.println("Verde");
        }
        if (inChar == _COR_VERMELHA){
          corVermelha();
          Serial.println("Vermelho");
        }
        if (inChar == '9'){
          corOff();
          Serial.println("Desliga");
        }
    }

    for (int i=0; i<64; i++) {
      inData[i] = '.';
    }
}

void corVerde() {
  analogWrite(fioAzul,   255);
  analogWrite(fioBranco, 255);
  analogWrite(fioCinza,  255);
  analogWrite(fioRoxo,   1);
}

void corVermelha() {
  analogWrite(fioAzul,   255);
  analogWrite(fioBranco, 255);
  analogWrite(fioCinza,  1);
  analogWrite(fioRoxo,   255);
}

void corOff() {
  digitalWrite(fioAzul,   LOW);
  digitalWrite(fioBranco, LOW);
  digitalWrite(fioCinza,  LOW);
  digitalWrite(fioRoxo,   LOW);
}

int transita(int cor) { // 1 - Vermelho ; 2 - Verde
  int volta = 255;

  if(lastColor == cor){
      return 0;
  }

  lastColor  = cor;

  switch (cor) {
      case _COR_VERMELHA:
        for(int i=0; i<=255; i++){
          digitalWrite(fioCinza, i);
          delay(5);
          digitalWrite(fioRoxo, volta--);
        }
        break;
      case _COR_VERDE:
        for(int i=0; i<=255; i++){
          digitalWrite(fioRoxo, i);
          delay(5);
          digitalWrite(fioCinza, volta--);
        }
        break;
      default:
        corOff();
  }
}
