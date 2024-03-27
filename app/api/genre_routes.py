from flask import Blueprint, jsonify
from app.models import Genre

genre_routes = Blueprint('genres', __name__)


@genre_routes.route('/')
def genres():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    genres = Genre.query.all()
    return {'genres': [genre.to_dict() for genre in genres]}