from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Carregar o modelo treinado
modelo = joblib.load('modelo_doenca_cardiaca.pkl')

@app.route('/prever', methods=['POST'])
def prever():
    data = request.get_json()

    # Processar os dados recebidos
    entrada = [
        data['idade'], data['sexo'], data['cp'], data['trestbps'],
        data['colesterol'], data['fbs'], data['restecg'], data['thalach'],
        data['exang'], data['oldpeak'], data['slope'], data['ca'], data['thal']
    ]

    entrada = np.array(entrada).reshape(1, -1)
    probabilidade = modelo.predict_proba(entrada)[0][1]  # Probabilidade da classe "com doença"

    # Classificar o risco com base na probabilidade
    if probabilidade < 0.1:
        risco = "Muito Baixo Risco"
        mensagem = "Paciente saudável. Manter hábitos saudáveis e acompanhar regularmente."
    elif 0.1 <= probabilidade < 0.3:
        risco = "Baixo Risco"
        mensagem = "Provavelmente saudável, mas considere acompanhamento médico."
    elif 0.3 <= probabilidade < 0.6:
        risco = "Moderado Risco"
        mensagem = "Risco moderado. Recomenda-se investigação adicional com um médico."
    else:
        risco = "Alto Risco"
        mensagem = "Paciente em alto risco. É urgente consultar um médico especializado."

    # Retornar o resultado
    return jsonify({
        "probabilidade": probabilidade,
        "risco": risco,
        "mensagem": mensagem
    })

if __name__ == '__main__':
    app.run(debug=True)
