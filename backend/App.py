from flask import Flask, jsonify    #Flask creates the app, jsonify converts data to JSON format that React can read
from flask_cors import CORS         #CORS allows cross-origin requests

app = Flask(__name__)               
CORS(app)

@app.route("/api/message")          #Creates the backend URL the axios code in React will call to get the message
def message():                      #Runs when the URL is called/requested
    return jsonify({"message": "Hello from Flask!"})

if __name__ == "__main__":          #Checks if the script is being run directly
    app.run(debug=True)             #Starts the flask server 

