# modeling/training/model_comparison.py

def compare_models(data):
  print("\n" + "="*60)
  print(" "*16 + "Model Performance Comparison")
  print("="*60)

  for index, model in enumerate(data):
    name = model['name']
    accuracy = model['accuracy']
    mse = model['mse']
    report = model['report']
    cmatrix = model['cmatrix']

    print(f"\n{name} Results")
    print("-"*60)
    print(f"Accuracy: {accuracy*100:.2f}%")
    print(f"MSE     : {mse*100:.2f}%")

    print("\nClassification Report:")
    print("     Precision  Recall  F1-Score  Support")
    for label, metrics in report.items():
      if label not in ['accuracy', 'macro avg', 'weighted avg']:
        print(f"  {label}  {metrics['precision']*100:.2f}%     {metrics['recall']*100:.2f}%  {metrics['f1-score']*100:.2f}%    {metrics['support']:.0f}")

    print("\nConfusion Matrix:")
    print(cmatrix)

    print("-"*60)

  print("="*60 + "\n")
