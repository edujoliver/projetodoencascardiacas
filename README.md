# 🫀 **Previsão de Doença Cardíaca**

Este projeto é uma aplicação web interativa que prevê o risco de doenças cardíacas com base em características clínicas. Ele utiliza aprendizado de máquina com um modelo **Random Forest**, implementado em Python com Flask, e uma interface amigável desenvolvida em HTML, CSS e JavaScript.

Este projeto é destinado para fins educacionais e demonstra a integração de um modelo de Machine Learning com uma aplicação web.

---

## 🧪 **Funcionalidades**

- Previsão do risco de doenças cardíacas com base em 14 variáveis clínicas.
- Interface amigável para entrada de dados do paciente.
- Classificação em **baixo**, **moderado** ou **alto risco**.
- Mensagem personalizada para orientar o próximo passo do paciente.
- Totalmente responsivo para diferentes tamanhos de tela.

---

## 🚀 **Tecnologias Utilizadas**

### **Backend**
- **Python**: Linguagem principal do projeto.
- **Flask**: Framework web para hospedar o modelo de Machine Learning.
- **Scikit-learn**: Para treinar e salvar o modelo de aprendizado de máquina.

### **Frontend**
- **HTML5**: Estrutura da interface.
- **CSS3**: Estilização e layout responsivo.
- **Bootstrap**: Framework para design responsivo.
- **JavaScript**: Para conectar o frontend ao backend.

---

## ⚙️ **Estrutura do Projeto**

```
.
├── backend
│   ├── app.py                  # Código principal do servidor Flask.
│   ├── modelo_doenca_cardiaca.pkl  # Modelo de Machine Learning salvo.
├── frontend/
│   ├── index.html           # Interface web.
│   ├── app.js               # Lógica do frontend.
│   └── styles.css           # Estilo da interface.
├── requirements.txt         # Dependências do projeto.
└── README.md                # Documentação do projeto.
```

## 🛠️ **Como Executar o Projeto**

### **Pré-requisitos**
- Python 3.8 ou superior.
- Navegador web (ex.: Google Chrome, Firefox).
- Editor de texto ou IDE (opcional): Visual Studio Code, PyCharm, etc.

## 📊 **Variáveis de Entrada**

### **Dados Necessários**
1. **Idade**  
   - Idade do paciente em anos (ex.: 45).

2. **Sexo**  
   - Masculino (1)  
   - Feminino (0).

3. **Tipo de Dor no Peito**  
   - Angina Típica (1): Dor no peito causada por esforço e aliviada pelo repouso.  
   - Angina Atípica (2): Dor no peito com características incomuns.  
   - Dor Não Anginosa (3): Desconforto no peito não relacionado ao coração.  
   - Assintomático (4): Nenhum sintoma relacionado ao peito.

4. **Pressão em Repouso (mmHg)**  
   - Pressão arterial medida em repouso, em milímetros de mercúrio (ex.: 120).

5. **Colesterol Total (mg/dL)**  
   - Nível de colesterol no sangue, em miligramas por decilitro (ex.: 200).

6. **Glicemia em Jejum**  
   - Sim (1): Nível de glicemia em jejum maior que 120 mg/dL.  
   - Não (0): Nível de glicemia em jejum menor ou igual a 120 mg/dL.

7. **Resultado do Eletrocardiograma**  
   - Normal (0): Sem anormalidades detectadas.  
   - Anormalidade ST-T (1): Alterações nas ondas ST-T do ECG.  
   - Hipertrofia Ventricular (2): Indício de aumento no tamanho do ventrículo esquerdo.

8. **Frequência Cardíaca Máxima (bpm)**  
   - Frequência cardíaca máxima alcançada durante esforço físico (ex.: 150).

9. **Angina Induzida por Exercício**  
   - Sim (1): Dor no peito causada por esforço físico.  
   - Não (0): Nenhuma dor no peito durante esforço físico.

10. **Depressão ST (mm)**  
    - Diferença do segmento ST no ECG em repouso e durante esforço físico (ex.: 1.5 mm).

11. **Inclinação do Segmento ST**  
    - Ascendente (1): Segmento ST inclinado para cima.  
    - Plano (2): Segmento ST plano.  
    - Descendente (3): Segmento ST inclinado para baixo.

12. **Número de Vasos Principais**  
    - Número de vasos sanguíneos principais coloridos por fluoroscopia (ex.: 0, 1, 2 ou 3).

13. **Thalassemia**  
    - Normal (3): Sem sinais de thalassemia.  
    - Defeito Fixo (6): Defeito permanente detectado.  
    - Defeito Reversível (7): Defeito transitório detectado.
   
      ## 📄 **Como o Modelo Funciona?**

O modelo foi desenvolvido para prever o risco de doenças cardíacas com base em dados clínicos de pacientes. Ele utiliza um algoritmo de aprendizado de máquina (Random Forest) e segue o pipeline descrito abaixo:

### **1. Treinamento**
- **Dataset Utilizado**:  
  O modelo foi treinado no **Cleveland Heart Disease Dataset**, amplamente utilizado como referência em estudos de predição de doenças cardíacas.
  
- **Pré-processamento**:  
  - Substituição de valores ausentes.  
  - Balanceamento de classes usando SMOTE (Synthetic Minority Oversampling Technique).  
  - Normalização das variáveis de entrada para garantir que todos os dados estejam na mesma escala.

- **Modelo de Machine Learning**:  
  Foi utilizado o algoritmo **Random Forest**, que combina múltiplas árvores de decisão para aumentar a precisão e evitar overfitting.

---

### **2. Previsão**
Após o treinamento, o modelo utiliza as variáveis inseridas pelo usuário para calcular a probabilidade de risco de doenças cardíacas. Os dados são processados para garantir que estejam no mesmo formato e escala que o modelo espera.

---

### **3. Classificação**
O resultado gerado pelo modelo é interpretado em três categorias:

- **Baixo Risco** (< 20%):  
  A probabilidade de doenças cardíacas é baixa. O paciente é classificado como "provavelmente saudável", mas o acompanhamento periódico é recomendado.

- **Risco Moderado** (20% - 70%):  
  Existe uma probabilidade significativa de risco, e o paciente deve procurar orientação médica.

- **Alto Risco** (> 70%):  
  O risco é alto, e o paciente deve procurar um cardiologista urgentemente para avaliação detalhada.

---

### **4. Mensagem Personalizada**
Com base na probabilidade calculada, o sistema fornece uma mensagem personalizada para orientar o usuário. Por exemplo:

- **Baixo Risco**:  
  "Provavelmente saudável. Mantenha hábitos saudáveis e faça acompanhamento médico regularmente."

- **Alto Risco**:  
  "Alto risco. Procure um cardiologista imediatamente."

---

### **5. Limitações**
- O modelo foi treinado com um dataset pequeno (303 registros), o que pode limitar sua generalização para outros contextos clínicos.
- Os resultados não devem ser usados como diagnóstico definitivo. Sempre consulte um profissional de saúde.

## 🔧 **Melhorias Futuras**

O projeto pode ser expandido com diversas melhorias para torná-lo mais robusto, flexível e útil em contextos reais. Algumas sugestões incluem:

1. **Expansão do Dataset**:  
   Utilizar datasets maiores e mais atualizados, como o **MIMIC-IV**, para treinar modelos mais generalizáveis e precisos.

2. **Gráficos Interativos**:  
   Adicionar gráficos que expliquem visualmente como as variáveis de entrada influenciam o resultado, como gráficos SHAP.

3. **Banco de Dados**:  
   Integrar um banco de dados para armazenar as previsões, possibilitando análises posteriores e rastreamento de pacientes.

4. **Melhorias na Interface**:  
   - Suporte multi-idiomas para atingir um público mais amplo.  
   - Adicionar mais detalhes e exemplos interativos na interface.

5. **Implementação de API REST Completa**:  
   Tornar a API mais robusta e pronta para integração com outros sistemas, como aplicativos móveis ou sistemas hospitalares.

6. **Suporte a Múltiplos Modelos**:  
   Incluir outros algoritmos de aprendizado de máquina (como Gradient Boosting ou Redes Neurais) e comparar os desempenhos para diferentes cenários.

---

## 📜 **Licença**

Este projeto é de uso exclusivo para fins educacionais e acadêmicos. Ele não foi projetado para uso clínico ou diagnóstico oficial. Os resultados gerados são apenas indicativos e não substituem a avaliação de um profissional de saúde.

Se deseja usar ou modificar este projeto, consulte o arquivo `LICENSE` para mais informações sobre os termos de uso.


   
