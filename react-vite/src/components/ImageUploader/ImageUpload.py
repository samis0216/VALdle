from flask import Flask, request, jsonify
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

ALLOWED_EXTENSIONS = {'jpeg', 'jpg'}
UPLOAD_FOLDER = 'uploads'

uploaded_images = []

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
