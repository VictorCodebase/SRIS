# Student Retention Intelligence System

## Overview
This project aims to predict student dropout risks using machine learning and provide an institution-friendly dashboard and mobile application for real-time monitoring. The system consists of:

- **Data Analysis & Preprocessing** (Exploratory Data Analysis, cleaning, feature engineering)
- **Machine Learning Model Training** (Multiple models trained and evaluated)
- **Backend API** (Node.js-based API for communication)
- **Mobile Prototype** (React Native frontend for institutional use)
- **Model Hosting** (Deployed on Hugging Face for inference)

## Dataset
Dataset: [Predict Students' Dropout and Academic Success (UCI)](https://archive.ics.uci.edu/dataset/697/predict+students+dropout+and+academic+success)

### Data Processing
1. **Exploratory Data Analysis (EDA)**
   - Identify missing values
   - Understand feature distributions
   - Detect correlations

2. **Preprocessing**
   - Handle missing data (Imputation/Removal)
   - Normalize and standardize numerical features
   - Encode categorical features

3. **Feature Engineering**
   - Create new informative features
   - Handle class imbalance with resampling techniques

## Machine Learning Model Training
### Model Selection
1. **Baseline Models**
   - Logistic Regression
   - Decision Trees
2. **Advanced Models**
   - Random Forest
   - XGBoost
   - Neural Networks

### Training Process
- Split dataset (train/test/validation)
- Hyperparameter tuning
- Model evaluation using metrics (accuracy, F1-score, AUC-ROC)
- Compare performances and select the best model

### Model Hosting
- Trained model is deployed on [Hugging Face](https://huggingface.co/) for inference
- API endpoint for real-time student dropout risk prediction

## Backend API (Node.js)
### Features
- Handles API requests from mobile app
- Fetches prediction results from Hugging Face model
- Manages institution and student data securely

### Technologies Used
- Express.js
- MongoDB (for student records and institution data)
- Authentication (JWT-based security)

## Mobile Application (React Native)
### Features
- Login system for institutions
- Dashboard displaying student dropout risks
- Ability to filter and monitor students
- Notifications for high-risk students

### Tech Stack
- React Native (UI & State Management)
- Axios (API calls)
- Redux (State management)

## Deployment
### Cloud Services
- **Model Hosting:** Hugging Face
- **Backend Hosting:** Render/Vercel
- **Database:** MongoDB Atlas

### Steps to Deploy
1. Train model and upload to Hugging Face
2. Deploy Node.js API on cloud platform
3. Publish React Native app to Play Store

## Future Improvements
- Integration with additional datasets for higher accuracy
- Expansion of model features for better risk predictions
- Improved real-time monitoring and analytics for institutions

> **Data-driven insights can improve student retention rates—let’s build a smarter education system!**
