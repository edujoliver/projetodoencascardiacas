# 🪀 **Heart Disease Prediction**

This project is an interactive web application that predicts the risk of heart disease based on clinical features. It utilizes machine learning with a **Random Forest** model, implemented in Python with Flask, and a user-friendly interface developed in HTML, CSS, and JavaScript.

This project is intended for educational purposes and demonstrates the integration of a Machine Learning model with a web application.

---

## 🧪 **Features**

- Predicts the risk of heart disease based on 14 clinical variables.
- User-friendly interface for patient data input.
- Classification into **low**, **moderate**, or **high risk**.
- Personalized message to guide the patient's next steps.
- Fully responsive for different screen sizes.

---

## 🚀 **Technologies Used**

### **Backend**
- **Python**: Main programming language of the project.
- **Flask**: Web framework to host the Machine Learning model.
- **Scikit-learn**: For training and saving the machine learning model.

### **Frontend**
- **HTML5**: Interface structure.
- **CSS3**: Styling and responsive layout.
- **Bootstrap**: Framework for responsive design.
- **JavaScript**: To connect the frontend to the backend.

---

## ⚙️ **Project Structure**

```
.
├── backend
│   ├── app.py                  # Main Flask server code.
│   └── heart_disease_model.pkl  # Saved Machine Learning model.
├── frontend/
│   ├── index.html           # Web interface.
│   ├── app.js               # Frontend logic.
│   └── styles.css           # Interface styling.
├── requirements.txt         # Project dependencies.
└── README.md                # Project documentation.
```

## 🛠️ **How to Run the Project**

### **Prerequisites**
- Python 3.8 or higher.
- Web browser (e.g., Google Chrome, Firefox).
- Text editor or IDE (optional): Visual Studio Code, PyCharm, etc.

## 📊 **Input Variables**

### **Required Data**
1. **Age**  
   - Patient's age in years (e.g., 45).

2. **Sex**  
   - Male (1)  
   - Female (0).

3. **Chest Pain Type**  
   - Typical Angina (1): Chest pain caused by exertion and relieved by rest.  
   - Atypical Angina (2): Chest pain with unusual characteristics.  
   - Non-Anginal Pain (3): Chest discomfort not related to the heart.  
   - Asymptomatic (4): No chest-related symptoms.

4. **Resting Blood Pressure (mmHg)**  
   - Blood pressure measured at rest, in millimeters of mercury (e.g., 120).

5. **Total Cholesterol (mg/dL)**  
   - Blood cholesterol level, in milligrams per deciliter (e.g., 200).

6. **Fasting Blood Sugar**  
   - Yes (1): Fasting blood sugar greater than 120 mg/dL.  
   - No (0): Fasting blood sugar less than or equal to 120 mg/dL.

7. **Electrocardiogram Results**  
   - Normal (0): No abnormalities detected.  
   - ST-T Abnormality (1): Changes in the ST-T waves of the ECG.  
   - Ventricular Hypertrophy (2): Signs of left ventricular enlargement.

8. **Maximum Heart Rate (bpm)**  
   - Maximum heart rate achieved during physical exertion (e.g., 150).

9. **Exercise-Induced Angina**  
   - Yes (1): Chest pain caused by physical exertion.  
   - No (0): No chest pain during physical exertion.

10. **ST Depression (mm)**  
    - Difference in the ST segment on the ECG at rest and during exertion (e.g., 1.5 mm).

11. **Slope of the ST Segment**  
    - Upsloping (1): ST segment sloping upwards.  
    - Flat (2): Flat ST segment.  
    - Downsloping (3): ST segment sloping downwards.

12. **Number of Major Vessels**  
    - Number of major blood vessels colored by fluoroscopy (e.g., 0, 1, 2, or 3).

13. **Thalassemia**  
    - Normal (3): No signs of thalassemia.  
    - Fixed Defect (6): Permanent defect detected.  
    - Reversible Defect (7): Temporary defect detected.

---

## 📄 **How the Model Works**

The model was developed to predict the risk of heart disease based on patients' clinical data. It uses a machine learning algorithm (Random Forest) and follows the pipeline described below:

### **1. Training**
- **Dataset Used**:  
  The model was trained on the **Cleveland Heart Disease Dataset**, widely used as a reference in heart disease prediction studies.
  
- **Preprocessing**:  
  - Replacing missing values.  
  - Balancing classes using SMOTE (Synthetic Minority Oversampling Technique).  
  - Normalizing input variables to ensure all data are on the same scale.

- **Machine Learning Model**:  
  The **Random Forest** algorithm was used, which combines multiple decision trees to increase accuracy and prevent overfitting.

---

### **2. Prediction**
After training, the model uses the user-provided variables to calculate the probability of heart disease risk. The data are processed to ensure they match the format and scale expected by the model.

---

### **3. Classification**
The result generated by the model is interpreted into three categories:

- **Low Risk** (< 20%):  
  The probability of heart disease is low. The patient is classified as "likely healthy," but periodic monitoring is recommended.

- **Moderate Risk** (20% - 70%):  
  There is a significant probability of risk, and the patient should seek medical advice.

- **High Risk** (> 70%):  
  The risk is high, and the patient should urgently consult a cardiologist for a detailed evaluation.

---

### **4. Personalized Message**
Based on the calculated probability, the system provides a personalized message to guide the user. For example:

- **Low Risk**:  
  "Likely healthy. Maintain healthy habits and have regular medical check-ups."

- **High Risk**:  
  "High risk. Consult a cardiologist immediately."

---

### **5. Limitations**
- The model was trained with a small dataset (303 records), which may limit its generalization to other clinical contexts.
- The results should not be used as a definitive diagnosis. Always consult a healthcare professional.

## 🔧 **Future Improvements**

The project can be expanded with various enhancements to make it more robust, flexible, and useful in real-world contexts. Some suggestions include:

1. **Dataset Expansion**:  
   Use larger and more up-to-date datasets, such as **MIMIC-IV**, to train more generalizable and accurate models.

2. **Interactive Charts**:  
   Add charts that visually explain how input variables influence the result, such as SHAP plots.

3. **Database Integration**:  
   Integrate a database to store predictions, allowing for further analysis and patient tracking.

4. **Interface Improvements**:  
   - Multi-language support to reach a broader audience.  
   - Add more details and interactive examples in the interface.

5. **Full REST API Implementation**:  
   Make the API more robust and ready for integration with other systems, such as mobile apps or hospital systems.

6. **Support for Multiple Models**:  
   Include other machine learning algorithms (such as Gradient Boosting or Neural Networks) and compare their performances for different scenarios.

---

## 📜 **License**

This project is intended exclusively for educational and academic purposes. It is not designed for clinical use or official diagnosis. The generated results are indicative only and do not replace the evaluation of a healthcare professional.

If you wish to use or modify this project, please refer to the `LICENSE` file for more information on usage terms.

