# modeling/run_modeling.py
from modeling.utils import load_data
from modeling.preprocessing import clean_data, preprocess_data
from modeling.scoring import calculate_dropout_proxy
from modeling.algorithms import logistic_regression_model, random_forest_model, decision_tree_model
from modeling.training import test_model, compare_models

def run_modeling():
  # Loading Data
  raw_data_path = 'datasets/raw/raw_data.csv'
  raw_data = load_data(raw_data_path)

  # Cleaning Data
  cleaned_data = clean_data(raw_data)

  # Preprocessing Data
  preprocessed_data = preprocess_data(cleaned_data)

  # Calculating dropout_risk
  data_with_risk = calculate_dropout_proxy(preprocessed_data)

  # Training and Saving Models
  lr_trained_model = logistic_regression_model(data_with_risk)
  rf_trained_model = random_forest_model(data_with_risk)
  dt_trained_model = decision_tree_model(data_with_risk)

  # Testing Models
  lr_test_result = test_model(lr_trained_model, data_with_risk)
  rf_test_result = test_model(rf_trained_model, data_with_risk)
  dt_test_result = test_model(dt_trained_model, data_with_risk)

  # Comparing and Outputting Results
  compare_models([lr_test_result, rf_test_result, dt_test_result])

if __name__ == "__main__":
  run_modeling()
