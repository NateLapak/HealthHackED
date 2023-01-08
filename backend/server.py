from flask import Flask, render_template, request

# Initializing flask app
app = Flask(__name__)
  
# Route for seeing a data
@app.route('/data')
def get_time():
  
    # Returning an api for showing in  reactjs
    return {
        "Age":"22",
    }
  
@app.route('/handle_data', methods=["POST"])    
def handle_date():
    data = request.data
    return data
    

# Running app
if __name__ == '__main__':
    app.run(host='0.0.0.0')