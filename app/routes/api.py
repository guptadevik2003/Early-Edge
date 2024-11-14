# app/routes/api.py
from flask import Blueprint, jsonify
from datetime import datetime
import time

api_bp = Blueprint('api', __name__, url_prefix='/api')

@api_bp.route('/')
def api():
  return jsonify({ "success": True, "message": "API Route Working!", "timestamp": datetime.now() })
