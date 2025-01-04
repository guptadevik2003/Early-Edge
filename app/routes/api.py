# app/routes/api.py
from flask import Blueprint, jsonify, request
from datetime import datetime
from app.utils.validate_data import validate_user_data
from modeling.utils import predict_student_data, get_model_performance, calc_dropout_score
from modeling.config import RISK_REV_MAP

api_bp = Blueprint('api', __name__)

# GET /api/
@api_bp.route('/api/', methods=['GET'])
def api():
  return jsonify({ "success": True, "message": "API Route Working!", "timestamp": datetime.now() })



@api_bp.route('/api/predict', methods=['POST'])
def api_predict():
  try:
    # Getting JSON data from request
    data = request.get_json()

    # Validating user data
    validated, reason = validate_user_data(data)

    # Returning if data not valid
    if validated == False:
      return jsonify({ "success": False, "error": reason })
    
    # Removing full_name from DataFrame
    data.pop('full_name', None)

    # Getting results from all 3 models
    result_arr = predict_student_data(data)

    # Implementing voting
    prediction = max([0,1,2], key=lambda x: result_arr.count(x))

    dropout_score, percentile, FWMIODR_plot, DODRL_plot = calc_dropout_score(data)
    
    # Returning predicted data
    return jsonify({
      "success": True,
      "data": {
        "result_arr": result_arr,
        "prediction": prediction,
        "RISK_REV_MAP": RISK_REV_MAP,
        "dropout_score": dropout_score,
        "percentile": percentile,
        "FWMIODR_plot": FWMIODR_plot,
        "DODRL_plot": DODRL_plot,
      }
    })
  
  except Exception as e:
    # Returning error
    return jsonify({ "success": False, "error": str(e) })



@api_bp.route('/api/model_performance', methods=['GET'])
def api_model_performance():

  # Get models performance
  performance = get_model_performance()

  # Returning model performance
  return jsonify({ "success": True, "data": performance })
