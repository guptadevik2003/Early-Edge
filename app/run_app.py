# app/run_app.py
from flask import Flask
from app.routes import register_blueprints
from app.config import PORT

def run_app():
  # Creating Flask App
  app = Flask(__name__)

  # Registering Blueprints from Routes
  register_blueprints(app)

  # Running Flask App
  app.run(debug=True, host='0.0.0.0', port=PORT)

if __name__ == "__main__":
  run_app()
