# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from pymongo import MongoClient
# import bcrypt




# # MongoDB Connection (adjust URI if needed)
# client = MongoClient('mongodb://localhost:27017/')
# db = client['user_db']
# users = db['users']

# @app.route('/signup', methods=['POST'])
# def signup():
#     data = request.json
#     name = data.get('name')
#     email = data.get('email')
#     password = data.get('password')

#     if users.find_one({'email': email}):
#         return jsonify({'message': 'Email already exists'}), 400

#     hashed_pw = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

#     users.insert_one({
#         'name': name,
#         'email': email,
#         'password': hashed_pw
#     })

#     return jsonify({'message': 'User registered successfully'}), 200

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import bcrypt

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Connect to MongoDB Compass (local MongoDB instance)
client = MongoClient('mongodb://localhost:27017/')
db = client['user_db']
users = db['users']

# -------------------------------
# SIGNUP ROUTE
# -------------------------------
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    # Check if user already exists
    if users.find_one({'email': email}):
        return jsonify({'message': 'Email already exists'}), 400

    # Hash password before saving
    hashed_pw = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Insert user into DB
    users.insert_one({
        'name': name,
        'email': email,
        'password': hashed_pw
    })

    return jsonify({'message': 'User registered successfully'}), 200

# -------------------------------
# LOGIN ROUTE
# -------------------------------
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Find user
    user = users.find_one({'email': email})
    if not user:
        return jsonify({'message': 'Email not found'}), 404

    # Compare passwords
    if bcrypt.checkpw(password.encode('utf-8'), user['password']):
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Incorrect password'}), 401

# -------------------------------
# Run Server
# -------------------------------
if __name__ == '__main__':
    app.run(debug=True)
