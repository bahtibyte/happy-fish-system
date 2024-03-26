#include <Arduino.h>
#include <ArduinoNvs.h>

void setup() {
  Serial.begin(115200); 

  NVS.begin();

}

void loop() {
  // put your main code here, to run repeatedly:

  Serial.println("Loop is re-running");
  delay(1000);

  int i = NVS.getInt("counter", -10);
  Serial.print("My counter is: ");
  Serial.println(i);

  NVS.setInt("counter", i + 1);
}

