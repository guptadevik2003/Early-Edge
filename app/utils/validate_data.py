# app/utils/validate_data.py

def validate_user_data(data):

  # Checking data instance
  if not data or not isinstance(data, dict):
    return False, "Invalid input. Please provide a valid JSON data."
  
  # Checking minimum number of features
  if len(data) < 17:
    return False, "Insufficient features. At least 17 features are required."
  
  # Validating full_name
  if "full_name" in data and len(data["full_name"]) < 1:
    return False, "Invalid full_name. Length of full_name must be greater than 1."
  
  # Validating address_type
  valid_address_type = [ "Urban", "Rural" ]
  if "address_type" in data and data["address_type"] not in valid_address_type:
    return False, f"Invalid address_type. Must be one of {valid_address_type}."

  # Validating family_size
  valid_family_size = [ "Less than or equal to 3", "Greater than 3" ]
  if "family_size" in data and data["family_size"] not in valid_family_size:
    return False, f"Invalid family_size. Must be one of {valid_family_size}."

  # Validating parent_status
  valid_parent_status = [ "Living together", "Apart" ]
  if "parent_status" in data and data["parent_status"] not in valid_parent_status:
    return False, f"Invalid parent_status. Must be one of {valid_parent_status}."

  # Validating mother_education, father_education
  valid_parent_education = [ "none", "primary education (4th grade)", "5th to 9th grade", "secondary education", "higher education" ]
  if "mother_education" in data and data["mother_education"] not in valid_parent_education:
    return False, f"Invalid mother_education. Must be one of {valid_parent_education}."
  if "father_education" in data and data["father_education"] not in valid_parent_education:
    return False, f"Invalid father_education. Must be one of {valid_parent_education}."

  # Validating mother_job, father_job
  valid_parent_job = [ "teacher", "health", "services", "at_home", "other" ]
  if "mother_job" in data and data["mother_job"] not in valid_parent_job:
    return False, f"Invalid mother_job. Must be one of {valid_parent_job}."
  if "father_job" in data and data["father_job"] not in valid_parent_job:
    return False, f"Invalid father_job. Must be one of {valid_parent_job}."

  # Validating travel_time
  valid_travel_time = [ "<15 min.", "15 to 30 min.", "30 min. to 1 hour", ">1 hour" ]
  if "travel_time" in data and data["travel_time"] not in valid_travel_time:
    return False, f"Invalid travel_time. Must be one of {valid_travel_time}."

  # Validating study_time
  valid_study_time = [ "<2 hours", "2 to 5 hours", "5 to 10 hours", ">10 hours" ]
  if "study_time" in data and data["study_time"] not in valid_study_time:
    return False, f"Invalid study_time. Must be one of {valid_study_time}."

  # Validating class_failures
  if "class_failures" in data:
    try:
      if not (0 <= int(data["class_failures"]) <= 3):
        return False, "class_failures must be between 0 and 3."
    except ValueError:
      return False, "class_failures must be an integer."
  
  # Validating school_support
  if "school_support" in data and data["school_support"] not in ["yes", "no"]:
    return False, f"Invalid school_support. Must be one of {["yes", "no"]}."
  
  # Validating family_support
  if "family_support" in data and data["family_support"] not in ["yes", "no"]:
    return False, f"Invalid family_support. Must be one of {["yes", "no"]}."
  
  # Validating internet_access
  if "internet_access" in data and data["internet_access"] not in ["yes", "no"]:
    return False, f"Invalid internet_access. Must be one of {["yes", "no"]}."

  # Validating health
  if "health" in data:
    try:
      if not (1 <= int(data["health"]) <= 5):
        return False, "health must be between 1 and 5."
    except ValueError:
      return False, "health must be an integer."
    
  # Validating absences
  if "absences" in data:
    try:
      if not (0 <= int(data["absences"]) <= 93):
        return False, "absences must be between 0 and 93."
    except ValueError:
      return False, "absences must be an integer."
    
  # Validating health
  if "final_grade" in data:
    try:
      if not (0 <= int(data["final_grade"]) <= 20):
        return False, "final_grade must be between 0 and 20."
    except ValueError:
      return False, "final_grade must be an integer."

  # Data is valid
  return True, None
