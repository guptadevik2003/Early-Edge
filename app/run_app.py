# app/run_app.py
from flask import Flask
from app.routes import register_blueprints, react_redirect
from app.config import PORT

def run_app():
  # Creating Flask App
  app = Flask(
    __name__,
    template_folder='public',
    static_folder='public',
    static_url_path='',
  )

  # Registering Blueprints from Routes
  register_blueprints(app)

  # Redirecting Other Routes to React Frontend
  react_redirect(app)

  # Running Flask App
  app.run(debug=True, host='0.0.0.0', port=PORT)

if __name__ == "__main__":
  run_app()
