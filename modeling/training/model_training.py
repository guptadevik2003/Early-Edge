# modeling/training/model_training.py
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

def train_model(model, data):
  X = data.drop(columns=['dropout_score', 'dropout_risk'])
  y = data['dropout_risk']

  scaler = StandardScaler()
  X_scaled = scaler.fit_transform(X)

  X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.3, random_state=42)
  model.fit(X_train, y_train)

  return model
