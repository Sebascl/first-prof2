from flask import request
#from flask import Flask
from flask_cors import CORS
from flask_api import FlaskAPI
import threading
from semaforo import Semaforo, Semaforo_Esquina
from accesskey import Cambiar_Estado
from functools import wraps
from flask import request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required

semaforo1 = Semaforo(11,12,13,1.0,0)
semaforo2 = Semaforo(15,16,18,1.0,0)
semaforo3 = Semaforo_Esquina(11,12,13,15,16,18,1.0,0)

app = FlaskAPI(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['JWT_SECRET_KEY'] = 'your-secret-key'
jwt = JWTManager(app)

threadsem1 = threading.Thread(target=semaforo1.paint)
threadsem1.start()
threadsem2 = threading.Thread(target=semaforo2.paint)
threadsem2.start()
threadsem3 = threading.Thread(target=semaforo3.paint)
threadsem3.start()
statethread = threading.Thread(target=Cambiar_Estado, args=(semaforo1, semaforo2, semaforo3))
statethread.daemon = True 
statethread.start()

@app.route('/semaphorebuttons', methods=["GET", "POST"])
@jwt_required()
def control_sequence():
    if request.method == "POST": 
        new_state = request.data.get("state")
        if new_state is not None and new_state in {0,1,2,3}:
            semaforo1.state = new_state
            semaforo2.state = new_state
            semaforo3.state = new_state
            return {"message":"Estado ha cambiado a {new_state}", "state1": semaforo1.state, "state2": semaforo2.state, "state3": semaforo3.state}
        else:
            return{"error": "Estado no válido"}, 422


@app.route('/sequencetime', methods=["POST"])
@jwt_required()
def set_sequence_time():
    new_time = request.data.get("freq")
    semaforo1.freq = new_time
    return {"freq": new_time}

@app.route('/secondsequencetime', methods=["POST"])
@jwt_required()
def set_second_sequence_time():
    new_time = request.data.get("freq")
    semaforo2.freq = new_time
    return {"freq": new_time}

@app.route('/login', methods=["POST"])
def login():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        if username == 'user' and password == 'password':
            access_token = create_access_token(identity=username)
            return {'access_token': access_token, 'user': username}
        else:
            return {'error': 'Credenciales inválidas'}, 401
    except Exception as e:
        return {'error': 'Error en el servidor'}, 500 

if __name__ == "__main__":
    app.run()
