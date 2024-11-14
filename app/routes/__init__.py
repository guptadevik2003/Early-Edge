# app/routes/__init__.py
from .root import root_bp
from .api import api_bp

def register_blueprints(app):
  app.register_blueprint(root_bp)
  app.register_blueprint(api_bp)
