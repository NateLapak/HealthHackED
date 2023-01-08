from flask import Flask, jsonify, request
import numpy as np
import pandas as pd

def find_nearest(array, value):
    array = np.asarray(array)
    idx = (np.abs(array - value)).argmin()
    return array[idx]

# Initializing flask app
app = Flask(__name__)
  
# Route for seeing a data
@app.route('/data')
def get_time():
  
    # Returning an api for showing in  reactjs
    return {
        "Age":"22",
    }
  
@app.route('/calculate', methods=['POST'])
def calculate():
    inputJson = request.get_json()

    sex = inputJson.get("gender")
    age = int(inputJson.get("age"))
    ethnicity = inputJson.get("race")
    height = int(inputJson.get("height"))
    dataType = "FEV1"

    path = 'dataset/{}/{}/lower limits/{}.csv'.format(sex, ethnicity, dataType)

    df = pd.read_csv(path)
    df = df.iloc[: , 1:]
    df.rename(columns={ df.columns[0]: "Height" }, inplace = True)
    df = df.dropna(axis=0)
    nheight = find_nearest(df['Height'].array, height)
    value = df.loc[df['Height'] == nheight]
    data = value[str(find_nearest(df.columns[1:].array.astype(int), age))]
    data.values[0] 

    I_FEV1 = float(inputJson.get("fev1"))
    result = ""

    if (I_FEV1 > data.values[0]):
        result = "normal"
    elif (I_FEV1 < data.values[0]):
        result = "abnormal"

    return jsonify({"result": result}), 201

    
# Running app
if __name__ == '__main__':
    app.run(host='0.0.0.0')