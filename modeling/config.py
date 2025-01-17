# modeling/config.py

# Weights for dropout risk calculation
WEIGHTS = {
  'final_grade'     : -0.52,
  'absences'        :  0.40,
  'class_failures'  :  0.35,
  'study_time'      : -0.30,
  'school_support'  : -0.25,
  'family_support'  : -0.20,
  'mother_education': -0.15,
  'father_education': -0.15,
  'internet_access' : -0.10,
  'health'          : -0.10,
  'parent_status'   :  0.10,
  'address_type'    :  0.05,
  'family_size'     :  0.05,
  'mother_job'      :  0.05,
  'father_job'      :  0.05,
  'travel_time'     :  0.05
}

NAME_MAP = {
  'final_grade'     : 'Final Grade',
  'absences'        : 'Absences',
  'class_failures'  : 'Class Failures',
  'study_time'      : 'Study Time',
  'school_support'  : 'School Support',
  'family_support'  : 'Family Support',
  'mother_education': 'Mother\'s Education',
  'father_education': 'Father\'s Education',
  'internet_access' : 'Internet Access',
  'health'          : 'Health',
  'parent_status'   : 'Parent Status',
  'address_type'    : 'Address Type',
  'family_size'     : 'Family Size',
  'mother_job'      : 'Mother\'s Job',
  'father_job'      : 'Father\'s Job',
  'travel_time'     : 'Travel Time'
}

RISK_MAP = {
  'low': 0,
  'moderate': 1,
  'high': 2
}

RISK_REV_MAP = {
  0: 'low',
  1: 'moderate',
  2: 'high'
}
