# dropout_risk_proxy.py
import pandas as pd
from modeling.config import WEIGHTS, RISK_MAP

def calculate_dropout_proxy(data):
  data['dropout_score'] = 0

  for attribute, weight in WEIGHTS.items():
    data['dropout_score'] += weight * data[attribute]

  # Defining dropout_risk level based on quantiles
  quantiles = data['dropout_score'].quantile([0.33, 0.66])

  data['dropout_risk'] = pd.cut(
    data['dropout_score'],
    bins=[-float('inf'), quantiles[0.33], quantiles[0.66], float('inf')],
    labels=['low', 'moderate', 'high']
  )

  data['dropout_risk'] = data['dropout_risk'].map(RISK_MAP)

  return data
