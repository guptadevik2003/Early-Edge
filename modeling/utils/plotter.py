# modeling/utils/plotter.py
import io
import base64
import matplotlib.pyplot as plt
import matplotlib.colors as mcolors
from modeling.config import NAME_MAP

def FWMIODR_plotter(weighted_attr_5):
  # Creating bar graph
  fig, ax = plt.subplots(figsize=(10,7))
  
  # Setting background color
  fig.patch.set_facecolor('#151515')
  ax.set_facecolor('#151515')
  
  # Plotting bar graph
  ax.bar(
    list(map(lambda x: NAME_MAP[x], list(weighted_attr_5.keys()))),
    list(map(lambda x: abs(x), list(weighted_attr_5.values()))),
    color='#FFC44D'
  )

  # Setting text properties
  ax.set_xlabel('Factors', color='#FFF', fontsize=14)
  ax.set_ylabel('Weightage', color='#FFF', fontsize=14)
  ax.set_title('Factors with most impact on Dropout Risk', color='#FFF', fontsize=16)
  
  # Setting edge and tick colors
  ax.tick_params(axis='both', colors='#FFF', labelsize=10)
  for spine in ax.spines.values():
    spine.set_edgecolor('#FFF')
  
  # Saving bar graph
  buffer = io.BytesIO()
  plt.savefig(buffer, format='png')
  buffer.seek(0)
  FWMIODR_plot = base64.b64encode(buffer.getvalue()).decode('utf-8')
  buffer.close()

  return FWMIODR_plot



def DODRL_plotter(weighted_attr):

  weighted_attr['final_grade'] = weighted_attr['final_grade'] / 4

  # Creating pie graph
  fig, ax = plt.subplots(figsize=(10,7))

  # Setting background color
  fig.patch.set_facecolor('#151515')
  ax.set_facecolor('#151515')

  values = [abs(x) for x in list(weighted_attr.values())]

  # Plotting pie graph
  wedges, texts, autotexts = ax.pie(
    values,
    labels=list(map(lambda x: NAME_MAP[x], weighted_attr.keys())),
    autopct='%1.1f%%',
    labeldistance=1.1,
    colors=[mcolors.to_rgba("#FFC44D", alpha=1.0-i*0.05) for i in range(len(weighted_attr))],
    textprops={'color': '#FFF'},
    wedgeprops={'edgecolor': '#000', 'linewidth': 0.25},
  )

  # Setting text properties
  for txt in autotexts:
    txt.set_color('#000')
  ax.set_title("Distribution of Dropout Risk Levels", color='#FFF', fontsize=16)

  print('gothere')

  # Saving pie graph
  buffer = io.BytesIO()
  plt.savefig(buffer, format='png')
  buffer.seek(0)
  DODRL_plot = base64.b64encode(buffer.getvalue()).decode('utf-8')
  buffer.close()

  return DODRL_plot
