# model_training.py
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler

def train_logistic_regression_model(data):
  X = data.drop(columns=['dropout_score', 'dropout_risk'])
  y = data['dropout_risk']

  scaler = StandardScaler()
  X_scaled = scaler.fit_transform(X)

  X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.3, random_state=42)

  lr_model = LogisticRegression(max_iter=1000, random_state=42)
  lr_model.fit(X_train, y_train)
  
  return lr_model



def train_random_forest_model(data):
  X = data.drop(columns=['dropout_score', 'dropout_risk'])
  y = data['dropout_risk']

  scaler = StandardScaler()
  X_scaled = scaler.fit_transform(X)

  X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.3, random_state=42)

  rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
  rf_model.fit(X_train, y_train)

  return rf_model



def train_decision_tree_model(data):
  X = data.drop(columns=['dropout_score', 'dropout_risk'])
  y = data['dropout_risk']

  scaler = StandardScaler()
  X_scaled = scaler.fit_transform(X)

  X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.3, random_state=42)

  dt_model = DecisionTreeClassifier(random_state=42)
  dt_model.fit(X_train, y_train)

  return dt_model
