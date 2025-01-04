# modeling/utils/web_plugins.py
import pandas as pd
from modeling.preprocessing import preprocess_data
from sklearn.preprocessing import StandardScaler
from modeling.utils import load_trained_model, load_data_with_risk
from modeling.training import test_model
from modeling.config import WEIGHTS
from modeling.utils.plotter import FWMIODR_plotter, DODRL_plotter

def predict_student_data(json_data):

  # Loading data with risk
  data = load_data_with_risk()

  # Loading trained_models
  trained_models = load_trained_model()

  # Converting JSON to DataFrame
  new_data = pd.DataFrame([json_data])

  # Preprocessing Data
  new_data_preprocessed = preprocess_data(new_data)
  
  # Scaling new_data
  scaler = StandardScaler()
  scaler.fit_transform(data.drop(columns=['dropout_score', 'dropout_risk']))
  new_data_scaled = scaler.transform(new_data_preprocessed)

  # Predicting new_data_scaled
  result = []
  for name, model in trained_models.items():
    proba = model.predict(new_data_scaled)[0]
    result.append(proba)

  # Converting arr of np.int64(0/1/2) to arr of 0/1/2
  return [x.tolist() for x in result]



def calc_dropout_score(json_data):

  # Loading data with risk
  data = load_data_with_risk()

  # Converting JSON to DataFrame
  new_data = pd.DataFrame([json_data])

  # Preprocessing Data
  new_data_preprocessed = preprocess_data(new_data)

  # Calculating dropout_score
  new_data_preprocessed['dropout_score'] = 0
  weighted_attr = {}
  for attribute, weight in WEIGHTS.items():
    weighted_attr[attribute] = float(weight * new_data_preprocessed[attribute][0])
    new_data_preprocessed['dropout_score'] += weight * new_data_preprocessed[attribute]
  weighted_attr_5 = dict(sorted(weighted_attr.items(), key=lambda item: abs(item[1]), reverse=True)[:5])

  # Calculating Percentile
  sorted_dropout_score = data['dropout_score'].sort_values().values
  below_count = (sorted_dropout_score < new_data_preprocessed['dropout_score'][0]).sum()
  percentile = ((below_count + 0.5) / len(sorted_dropout_score)) * 100

  # Loading bar graph
  FWMIODR_plot = FWMIODR_plotter(weighted_attr_5)

  # Loading pie graph
  DODRL_plot = DODRL_plotter(weighted_attr)
  
  return new_data_preprocessed['dropout_score'][0], percentile, FWMIODR_plot, DODRL_plot



def get_model_performance():

  # Loading data with risk
  data_with_risk = load_data_with_risk()

  # Loading trained_models
  trained_models = load_trained_model()

  # Generating performance result
  result = {
    'lr': test_model(trained_models['lr_trained_model'], data_with_risk),
    'rf': test_model(trained_models['rf_trained_model'], data_with_risk),
    'dt': test_model(trained_models['dt_trained_model'], data_with_risk),
  }

  return result
