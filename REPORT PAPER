# Student Retention Intelligence System (SRIS): Predicting Dropout Risks with Machine Learning

Raw document: [Student Retention Intelligence System (SRIS): Predicting Dropout Risks with Machine Learning](https://docs.google.com/document/d/1Ja-VYPhHkhs_D9gcfihoWDt361fU5Ud0/edit)

## Abstract  
Student retention is a critical challenge for educational institutions. This research presents the development of a Student Retention Intelligence System (SRIS) that predicts student dropout risks using machine learning models. The system integrates data preprocessing, model training, and deployment with an institution-friendly dashboard and mobile application for real-time monitoring. The research utilizes the "Predict Students' Dropout and Academic Success" dataset from UCI and employs various machine learning techniques, including logistic regression, decision trees, random forests, and neural networks. The study outlines the design, implementation, and deployment strategies for the SRIS, emphasizing its potential to enhance student retention efforts.

## 1. Introduction  
Educational institutions face significant challenges in student retention, with various academic, socio-economic, and personal factors influencing dropout rates. Machine learning offers a data-driven approach to identifying at-risk students and implementing timely interventions. This research focuses on developing an AI-powered system to predict student dropout risks and assist institutions in improving retention rates.

Previous studies have explored machine learning for predicting student performance and dropout risks. Techniques such as decision trees, logistic regression, and deep learning have shown promise in identifying key indicators. However, the integration of predictive models with real-time monitoring systems remains an area requiring further exploration.

## 2. Methodology  

### 2.1 Dataset Description  
The dataset utilized in this study contains 37 columns that provide a rich variety of information about students. This data is instrumental in identifying potential dropout indicators:

- **Demographic and Socio-Economic Features:** Columns such as `Marital_status`, `Nationality`, `Mothers_qualification`, and `Fathers_occupation` provide insights into students' social and economic backgrounds, which influence educational outcomes.
- **Academic Features:** Academic performance data, including `Admission_grade`, `Curricular_units_1st_sem_grade`, and `Curricular_units_2nd_sem_grade`, helps assess a student's readiness and success in higher education.
- **Financial Factors:** Variables like `Debtor`, `Tuition_fees_up_to_date`, and `Scholarship_holder` highlight financial pressures students face, which impact dropout rates.
- **Engagement and Attendance:** Data points such as `Daytime_evening_attendance`, `Curricular_units_1st_sem_enrolled`, and `Curricular_units_1st_sem_approved` reflect student participation levels and commitment to their studies.

### 2.2 Data Preprocessing  
To ensure the dataset is clean and ready for analysis:

- **Handling Missing Values:** All columns have complete data, ensuring higher model accuracy.
- **Normalization and Encoding:** Numerical features are normalized, and categorical variables (e.g., `Marital_status`, `Gender`, `Status`) are one-hot encoded to enhance machine learning compatibility.

### 2.3 Exploratory Data Analysis (EDA)  
EDA helps uncover relationships among variables impacting dropout predictions:

- **Correlation Analysis:** `Previous_qualification_grade` directly correlates with `Curricular_units_1st_sem_grade` and `Curricular_units_2nd_sem_grade`, indicating that past academic performance is a strong predictor of retention.
- **Dropout Patterns Analysis:** Factors such as `International`, `Age_at_enrollment`, and socioeconomic status influence dropout likelihood, requiring targeted support strategies.
- **Feature Importance Determination:** Using Random Forest feature importance scores, key predictors such as `Curricular_units_1st_sem_approved` and `Tuition_fees_up_to_date` are identified.

### 2.4 Model Development  

Several machine learning models are trained:

- **Baseline Models:** Logistic Regression and Decision Trees provide initial benchmarks.
- **Advanced Models:** Random Forest and XGBoost undergo hyperparameter tuning to capture complex feature relationships. Cross-validation ensures robust predictions.
- **Model Evaluation:** Metrics such as accuracy, precision, recall, and F1-score are analyzed, with recall being particularly critical for identifying at-risk students.

### 2.5 Model Deployment  
The optimal model is deployed using Hugging Face’s infrastructure:

- **Backend API:** Provides real-time predictions for institutions.
- **Web Dashboard Interface:** Displays dropout trends and risk notifications for proactive intervention.

## 3. System Implementation  

### 3.1 Backend API  
The API manages:
- Prediction requests from institutions
- Secure student data management
- Integration with the web dashboard

### 3.2 Web Dashboard  
Built using React, the dashboard includes:
- Institutional login functionality
- Visualized dropout risk trends
- High-risk student notifications

## 4. Results and Discussion  
Model performance is assessed using accuracy, precision, recall, and F1-score. The impact of predictive insights on institutional decision-making is evaluated to highlight the system's role in improving student retention.

## 5. Deployment and Monitoring  
The deployed model is continuously monitored using:

- **Performance Tracking**
- **Drift Detection and Retraining Strategies**
- **Real-World Testing with Institutional Data**

## 6. Future Work  
Potential improvements include:

- Expanding the dataset for better generalization
- Refining feature selection techniques
- Scaling the system for broader institutional adoption

## Conclusion  
The development and deployment of the Student Retention Intelligence System (SRIS) demonstrate the potential of predictive analytics in education. By harnessing the rich student data collected, SRIS enables institutions to take proactive measures to improve retention rates. The research confirms that machine learning can transform higher education practices by providing actionable insights into student success.

## References  

- Aulck, L., Velagapudi, N., Blumenstock, J., West, J. "Predicting student dropout in higher education." *2016 ICML Workshops #Data4Good Machine Learning, New York* (2016).
- Breiman, L. "Random forests." *Mach. Learn.* 45(1):5–32 (2001). DOI: [10.1023/A:1010933404324](https://doi.org/10.1023/A:1010933404324).
- Freeman, E.A., Moisen, G.G. "A comparison of the performance of threshold criteria for binary classification in terms of predicted prevalence and kappa." *Ecol. Modell.* 217(1–2):48–58 (2008). DOI: [10.1016/j.ecolmodel.2008.05.015](https://doi.org/10.1016/j.ecolmodel.2008.05.015).
- Hellas, A., et al. "Predicting academic performance: a systematic literature review." *Proceedings Companion of the 23rd Annual ACM Conference on Innovation and Technology in Computer Science Education* (2018).
- Jadrić, M., Garača, Ž., Ćukušić, M. "Student dropout analysis with application of data mining methods." *Manag. J. Contemp. Manag. Issues.* 15(1):31–46 (2010).
- Kadar, M., Sarraipa, J., Guevara, J.C., Restrepo, E.G. "An integrated approach for fighting dropout and enhancing students’ satisfaction in higher education." *Proceedings of the 8th International Conference on Software Development and Technologies for Enhancing Accessibility and Fighting Info-exclusion, DSAI 2019, Thessaloniki, Greece* (2018).
- Kotsiantis, S.B., Pierrakeas, C.J., Pintelas, P.E. "Preventing student dropout in distance learning using machine learning techniques." *Knowledge-Based Intelligent Information and Engineering Systems; Heidelberg: Springer* (2003).
