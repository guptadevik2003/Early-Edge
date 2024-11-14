# modeling/preprocessing/data_preprocessing.py
import numpy as np

def preprocess_data(data):
  # Converting ordinal and nominal categorical variables to numeric values
  education_map = { 'none': 0, 'primary education (4th grade)': 1, '5th to 9th grade': 2, 'secondary education': 3, 'higher education': 4 }
  travel_time_map = { '<15 min.': 1, '15 to 30 min.': 2, '30 min. to 1 hour': 3, '>1 hour': 4 }
  study_time_map = { '<2 hours': 1, '2 to 5 hours': 2, '5 to 10 hours': 3, '>10 hours': 4 }

  data['address_type'] = data['address_type'].apply(lambda x: 1 if x=='Urban' else 0)
  data['family_size'] = data['family_size'].apply(lambda x: 1 if x=='Less than or equal to 3' else 0)
  data['parent_status'] = data['parent_status'].apply(lambda x: 1 if x=='Living together' else 0)
  data['mother_education'] = data['mother_education'].map(education_map)
  data['father_education'] = data['father_education'].map(education_map)
  data['mother_job'] = data['mother_job'].apply(lambda x: 0 if x=='at_home' else 1)
  data['father_job'] = data['father_job'].apply(lambda x: 0 if x=='at_home' else 1)
  data['travel_time'] = data['travel_time'].map(travel_time_map)
  data['study_time'] = data['study_time'].map(study_time_map)
  data['school_support'] = data['school_support'].apply(lambda x: 1 if x=='yes' else 0)
  data['family_support'] = data['family_support'].apply(lambda x: 1 if x=='yes' else 0)
  data['internet_access'] = data['internet_access'].apply(lambda x: 1 if x=='yes' else 0)
  data['absences'] = data['absences'].apply(lambda x: np.ceil(x/18))

  # Ignoring class_failures, health, final_grade

  return data
