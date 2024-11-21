# app/routes/api.py
from flask import Blueprint, jsonify
from datetime import datetime

api_bp = Blueprint('api', __name__)

# GET /api/
@api_bp.route('/api/')
def api():
  return jsonify({ "success": True, "message": "API Route Working!", "timestamp": datetime.now() })
