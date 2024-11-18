document.getElementById('preverButton').addEventListener('click', async () => {
    const rawPressure = document.getElementById('trestbps').value;
    const systolicPressure = parseInt(rawPressure.split('/')[0]); // Usar apenas a pressão sistólica

    const data = {
        idade: parseInt(document.getElementById('idade').value),
        sexo: parseInt(document.getElementById('sexo').value),
        cp: parseInt(document.getElementById('cp').value),
        trestbps: systolicPressure, // Enviar apenas a pressão sistólica
        colesterol: parseInt(document.getElementById('colesterol').value),
        fbs: parseInt(document.getElementById('fbs').value),
        restecg: parseInt(document.getElementById('restecg').value),
        thalach: parseInt(document.getElementById('thalach').value),
        exang: parseInt(document.getElementById('exang').value),
        oldpeak: parseFloat(document.getElementById('oldpeak').value),
        slope: parseInt(document.getElementById('slope').value),
        ca: parseInt(document.getElementById('ca').value),
        thal: parseInt(document.getElementById('thal').value)
    };

    try {
        const response = await fetch('http://127.0.0.1:5000/prever', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('Erro ao conectar à API.');

        const result = await response.json();
        document.getElementById('resultado').classList.remove('d-none');
        document.getElementById('probabilidade').innerText = `Probabilidade: ${(result.probabilidade * 100).toFixed(2)}%`;
        document.getElementById('risco').innerText = `Classificação: ${result.risco}`;
        document.getElementById('mensagem').innerText = `Mensagem: ${result.mensagem}`;
    } catch (error) {
        alert(error.message);
    }
});
