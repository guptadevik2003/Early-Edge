# modeling/run_modeling.py
from modeling.utils import load_data_with_risk, load_trained_model
from modeling.training import test_model, compare_models

def run_modeling():

  # Loading data with risk
  data_with_risk = load_data_with_risk()

  # Loading trained models
  trained_models = load_trained_model()

  # Testing Models
  lr_test_result = test_model(trained_models["lr_trained_model"], data_with_risk)
  rf_test_result = test_model(trained_models["rf_trained_model"], data_with_risk)
  dt_test_result = test_model(trained_models["dt_trained_model"], data_with_risk)

  # Comparing and Outputting Results
  compare_models([lr_test_result, rf_test_result, dt_test_result])

if __name__ == "__main__":
  run_modeling()
