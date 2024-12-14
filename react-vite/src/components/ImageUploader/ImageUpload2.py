from flask import Flask, request, jsonify
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)

ALLOWED_EXTENSIONS = {'jpeg', 'jpg'}
UPLOAD_FOLDER = 'uploads'

uploaded_images = []

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(UPLOAD_FOLDER, filename)

        file.save(filepath)

        file_size = os.path.getsize(filepath)

        uploaded_images.append({'filename': filename, 'size': file_size})

        sorted_images = sorted(uploaded_images, key=lambda x: x['size'])

        return jsonify({
            "message": "File uploaded successfully!",
            "sorted_images": sorted_images
        }), 200

    else:
        return jsonify({"error": "File type not allowed. Please upload a JPEG image."}), 400


if __name__ == '__main__':
    app.run(debug=True)
