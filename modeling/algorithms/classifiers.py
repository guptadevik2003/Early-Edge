# classifiers.py
import joblib
import os.path
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from modeling.training.model_training import train_model

# Logistic Regression
def logistic_regression_model(data):
  lr_model_path = 'modeling/algorithms/trained_classifiers/logistic_regression_model.pkl'
  
  if os.path.isfile(lr_model_path):
    lr_trained_model = joblib.load(lr_model_path)
  
  else:
    lr_model = LogisticRegression(max_iter=1000, random_state=42)
    lr_trained_model = train_model(lr_model, data)
    joblib.dump(lr_trained_model, lr_model_path)
    
  return lr_trained_model



# Random Forest Classifier
def random_forest_model(data):
  rf_model_path = 'modeling/algorithms/trained_classifiers/random_forest_model.pkl'
  
  if os.path.isfile(rf_model_path):
    rf_trained_model = joblib.load(rf_model_path)

  else:
    rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
    rf_trained_model = train_model(rf_model, data)
    joblib.dump(rf_trained_model, rf_model_path)
  
  return rf_trained_model



# Decision Tree Classifier
def decision_tree_model(data):
  dt_model_path = 'modeling/algorithms/trained_classifiers/decision_tree_model.pkl'

  if os.path.isfile(dt_model_path):
    dt_trained_model = joblib.load(dt_model_path)

  else:
    dt_model = DecisionTreeClassifier(random_state=42)
    dt_trained_model = train_model(dt_model, data)
    joblib.dump(dt_trained_model, dt_model_path)

  return dt_trained_model
