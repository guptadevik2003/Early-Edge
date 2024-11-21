# app/routes/__init__.py
from flask import render_template
from .api import api_bp

def register_blueprints(app):
  app.register_blueprint(api_bp)

def react_redirect(app):
  @app.errorhandler(404)
  def redirect(e):
    return render_template('index.html')
