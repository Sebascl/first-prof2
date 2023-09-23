import RPi.GPIO as GPIO
import time
from EmulatorGUI import GPIO


class Semaforo:
    def __init__(self, red:int, yellow:int, green:int, freq:float, state:int):
        self.red = red
        self.yellow = yellow
        self.green = green
        self.freq = freq
        self.state = state
        
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(self.red, GPIO.OUT)
        GPIO.setup(self.yellow, GPIO.OUT)
        GPIO.setup(self.green, GPIO.OUT)

    def paint(self):
        while True:
            if self.state == 0:
                GPIO.output(self.red, False)
                GPIO.output(self.yellow, False)
                GPIO.output(self.green, False)
                
            elif self.state == 1:
                GPIO.output(self.red, True)
                time.sleep(self.freq)
                GPIO.output(self.red, False)
                time.sleep(self.freq)
                
                GPIO.output(self.yellow, True)
                time.sleep(self.freq)
                GPIO.output(self.yellow, False)
                time.sleep(self.freq)
                
                GPIO.output(self.green, True)
                time.sleep(self.freq)
                GPIO.output(self.green, False)
                time.sleep(self.freq)
                
                GPIO.output(self.yellow, True)
                time.sleep(self.freq)
                GPIO.output(self.yellow, False)
                time.sleep(self.freq)
            
            elif self.state == 2:
                GPIO.output(self.yellow, True)
                time.sleep(self.freq)
                GPIO.output(self.yellow, False)
                time.sleep(self.freq)
                
class Semaforo_Esquina :
    def __init__(self, red1:int, yellow1:int, green1:int, red2:int, yellow2:int, green2:int, freq:float, state:int):
        self.red1 = red1
        self.yellow1 = yellow1
        self.green1 = green1
        self.red2 = red2
        self.yellow2 = yellow2
        self.green2 = green2
        self.freq = freq
        self.state = state
        
        GPIO.setmode(GPIO.BCM)
        
    def paint(self):
        while True:
            if self.state == 3:
                GPIO.output(self.red1, True)
                GPIO.output(self.red2, False)
                GPIO.output(self.yellow1, False)
                GPIO.output(self.yellow2, True)
                GPIO.output(self.green1, False)
                GPIO.output(self.green2, False)
                time.sleep(self.freq)
                
                GPIO.output(self.red1, True)
                GPIO.output(self.red2, False)
                GPIO.output(self.yellow1, False)
                GPIO.output(self.yellow2, False)
                GPIO.output(self.green1, False)
                GPIO.output(self.green2, True)
                time.sleep(self.freq+0.4)
                
                GPIO.output(self.red1, True)
                GPIO.output(self.red2, False)
                GPIO.output(self.yellow1, False)
                GPIO.output(self.yellow2, True)
                GPIO.output(self.green1, False)
                GPIO.output(self.green2, False)
                time.sleep(self.freq)
                
                GPIO.output(self.red1, True)
                GPIO.output(self.red2, True)
                GPIO.output(self.yellow1, False)
                GPIO.output(self.yellow2, False)
                GPIO.output(self.green1, False)
                GPIO.output(self.green2, False)
                time.sleep(self.freq-0.8)
                
                GPIO.output(self.red1, False)
                GPIO.output(self.red2, True)
                GPIO.output(self.yellow1, True)
                GPIO.output(self.yellow2, False)
                GPIO.output(self.green1, False)
                GPIO.output(self.green2, False)
                time.sleep(self.freq)
                
                GPIO.output(self.red1, False)
                GPIO.output(self.red2, True)
                GPIO.output(self.yellow1, False)
                GPIO.output(self.yellow2, False)
                GPIO.output(self.green1, True)
                GPIO.output(self.green2, False)
                time.sleep(self.freq+0.4)
                
                GPIO.output(self.red1, False)
                GPIO.output(self.red2, True)
                GPIO.output(self.yellow1, True)
                GPIO.output(self.yellow2, False)
                GPIO.output(self.green1, False)
                GPIO.output(self.green2, False)
                time.sleep(self.freq)
                
                GPIO.output(self.red1, True)
                GPIO.output(self.red2, True)
                GPIO.output(self.yellow1, False)
                GPIO.output(self.yellow2, False)
                GPIO.output(self.green1, False)
                GPIO.output(self.green2, False)
                time.sleep(self.freq-0.8)