# modeling/training/model_comparison.py

models = ['Logistic Regression', 'Random Forest Classifier', 'Decision Tree Classifier']

def compare_models(data):
  for index, model in enumerate(data):
    print(f"{models[index]}:")
    print(f"Accuracy: {model['accuracy']*100:.2f}%")
    print(f"MSE     : {model['mse']*100:.2f}%")
    print(f"Classification Report:\n{model['report']}")
    print(f"Confusion Matrix:\n{model['matrix']}\n\n\n")
