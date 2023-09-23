import RPi.GPIO as GPIO
from mfrc522 import SimpleMFRC522
import threading

def imprimir(identificador, texto):
    print("Id: {0}, Dato: {1}".format(identificador, texto))

reader = SimpleMFRC522()

def Cambiar_Estado(semaforo1, semaforo2, semaforo3):
    try:
        while True:
            id, text = reader.read()
            imprimir(id, text)
        
            if id == 1041449168530:
                if semaforo1.state == 2:
                    semaforo1.state = 1
                    semaforo2.state = 1
                    semaforo3.state = 1
                    print("semaforo cambiado a estado Normal")
            elif id == 1054202624930:
                if semaforo1.state == 1:
                    semaforo1.state = 2
                    semaforo2.state = 2
                    semaforo3.state = 2
                    print("semaforo cambiado a estado Warning")
                elif semaforo1.state == 2:
                    semaforo1.state = 1
                    semaforo2.state = 1
                    semaforo3.state = 1
                    print("semaforo cambiado a estado Normal")
            else:
                print("Acceso incorrecto")
    except KeyboardInterrupt:
        pass
    finally:
        GPIO.cleanup()

