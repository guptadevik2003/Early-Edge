# modeling/training/model_testing.py
import re
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix, mean_squared_error
from sklearn.preprocessing import StandardScaler

def test_model(model, data):
  X = data.drop(columns=['dropout_score', 'dropout_risk'])
  y = data['dropout_risk']

  scaler = StandardScaler()
  X_scaled = scaler.fit_transform(X)

  X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.3, random_state=42)

  y_pred = model.predict(X_test)

  name = re.sub(r"(?<!^)(?=[A-Z])", " ", model.__class__.__name__)
  accuracy = accuracy_score(y_test, y_pred)
  mse = float(mean_squared_error(y_test, y_pred))
  report = classification_report(y_test, y_pred, output_dict=True)
  cmatrix = confusion_matrix(y_test, y_pred).tolist()

  return { 'name': name, 'accuracy': accuracy, 'mse': mse, 'report': report, 'cmatrix': cmatrix }
