# main.py (Root)
from modeling import run_modeling
from app import run_app

if __name__ == "__main__":
  print("Starting Model Training...")
  run_modeling()

  print("Starting Flask Server...")
  run_app()
