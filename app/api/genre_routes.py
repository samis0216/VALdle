from flask import Blueprint, jsonify
from app.models import Genre

genre_routes = Blueprint('genres', __name__)


@genre_routes.route('/')
def genres():
    genres = Genre.query.all()
    print(genres)
    return [genre.to_dict() for genre in genres]

@genre_routes.route('/<int:id>')
def genre(id):
    genre = Genre.query.get(id)
    return genre.to_dict()

@genre_routes.route('/<int:id>/like')
def likedGenre(id):
    genre = Genre.query.get(id)
