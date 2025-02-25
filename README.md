# Student Retention Intelligence System `[SRIS]`

## Overview
This project aims to predict student dropout risks using machine learning and provide an institution-friendly dashboard and mobile application for real-time monitoring. The system consists of:

- **Data Analysis & Preprocessing** (Exploratory Data Analysis, cleaning, feature engineering)
- **Machine Learning Model Training** (Multiple models trained and evaluated)
- **Backend API** (Node.js-based API for communication)
- **Web Dashboard** (React frontend for institutional use)
- **Model Hosting** (Deployed on Hugging Face for inference)

## Dataset
Dataset: [Predict Students' Dropout and Academic Success (UCI)](https://archive.ics.uci.edu/dataset/697/predict+students+dropout+and+academic+success)  
This dataset is supported by program SATDAP - [Capacitação da Administração Pública](https://www.enap.gov.br/pt/) under grant POCI-05-5762-FSE-000191, Portugal.


### Data Processing
```python
import pandas as pd

data = pd.read_csv("student_data.csv")
print(data.info())  # Display dataset structure
```
1. **EDA**: Identify missing values, feature distributions, correlations
2. **Preprocessing**: Handle missing data, normalize numerical values, encode categorical features
3. **Feature Engineering**: Generate new features, address class imbalances

## Machine Learning Model Training
### Model Selection
```python
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)
```
1. **Baseline Models**: Logistic Regression, Decision Trees
2. **Advanced Models**: Random Forest, XGBoost, Neural Networks

### Model Hosting
- Trained model is deployed on [Hugging Face](https://huggingface.co/)
- API endpoint for real-time inference

## Backend API (Node.js)
### Features
- Handles requests from web dashboard
- Fetches prediction results from Hugging Face model
- Manages institution and student data securely

### Sample API Endpoint
```javascript
app.post("/predict", async (req, res) => {
  const { studentData } = req.body;
  const response = await axios.post("https://huggingface.co/model-endpoint", studentData);
  res.json(response.data);
});
```

## Web Dashboard (React)
### Features
- Login system for institutions
- Visualized dropout risk trends
- Notifications for high-risk students

### Sample Component
```jsx
function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Dropout Risk: {student.risk}%</p>
    </div>
  );
}
```

## Deployment
### Cloud Services
- **Model Hosting:** Hugging Face
- **Backend Hosting:** Render/Vercel
- **Database:** MongoDB Atlas

### Deployment Steps
1. Train model and upload to Hugging Face
2. Deploy Node.js API
3. Deploy React web dashboard

## Future Improvements
- Integration with more datasets
- Refinement of risk analysis model
- Advanced real-time monitoring tools

> **"Empowering institutions to improve student retention through AI-driven insights."**

