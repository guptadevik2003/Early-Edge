# main.py
from modeling.preprocessing.data_cleaning import clean_data
from modeling.preprocessing.data_preprocessing import preprocess_data
from modeling.scoring.dropout_risk_proxy import calculate_dropout_proxy
from modeling.training.model_training import train_random_forest_model, train_decision_tree_model, train_logistic_regression_model
from modeling.training.model_testing import test_model
from modeling.training.model_comparison import compare_models
from modeling.utils.helpers import load_data

def main():
  # Load Data
  raw_data_path = 'datasets/raw/raw_data.csv'
  raw_data = load_data(raw_data_path)

  # Clean Data (Data is already Clean)
  cleaned_data = clean_data(raw_data)

  # Preprocess Data
  preprocessed_data = preprocess_data(cleaned_data)
  
  # Calculating dropout_risk
  data_with_risk = calculate_dropout_proxy(preprocessed_data)

  # Training Models
  lr_trained_model = train_logistic_regression_model(data_with_risk)
  rf_trained_model = train_random_forest_model(data_with_risk)
  dt_trained_model = train_decision_tree_model(data_with_risk)

  # Testing Models
  lr_test_result = test_model(lr_trained_model, data_with_risk)
  rf_test_result = test_model(rf_trained_model, data_with_risk)
  dt_test_result = test_model(dt_trained_model, data_with_risk)

  # Output all results
  compare_models([lr_test_result, rf_test_result, dt_test_result])

if __name__ == "__main__":
  main()
