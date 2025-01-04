# modeling/utils/helpers.py
import pandas as pd
from modeling.preprocessing import clean_data, preprocess_data
from modeling.scoring import calculate_dropout_proxy
from modeling.algorithms import logistic_regression_model, random_forest_model, decision_tree_model

def load_data(data_path):
  return pd.read_csv(data_path)

def load_data_with_risk():
  # Loading Data
  raw_data_path = 'datasets/raw/raw_data.csv'
  raw_data = load_data(raw_data_path)

  # Cleaning Data
  cleaned_data = clean_data(raw_data)

  # Preprocessing Data
  preprocessed_data = preprocess_data(cleaned_data)

  # Calculating dropout_risk
  data_with_risk = calculate_dropout_proxy(preprocessed_data)

  return data_with_risk

def load_trained_model():

  # Loading data with risk
  data_with_risk = load_data_with_risk()

  # Loading trained models
  trained_models = {
    'lr_trained_model': logistic_regression_model(data_with_risk),
    'rf_trained_model': random_forest_model(data_with_risk),
    'dt_trained_model': decision_tree_model(data_with_risk),
  }

  return trained_models
