from flask import Blueprint, jsonify, request
from app.models import db
from app.models.guess import Guess
from app.forms.guess_form import GuessForm

guesses_routes = Blueprint('guesses', __name__)

@guesses_routes.route('/')
def guesses():
    guesses = Guess.query.all()
    return [guess.to_dict() for guess in guesses]

@guesses_routes.route('/<int:id>', methods=['POST'])
def newGuess(id):
    form = GuessForm()
    print(form.data)
    # form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    guess = Guess(guess_name=form.data['guess_name'], guesser_id=form.data['guesser_id'])
    db.session.add(guess)
    db.session.commit()
    guesses = Guess.query.filter(Guess.guesser_id == id).all()
    return [guess.to_dict() for guess in guesses]

@guesses_routes.route('/<int:id>/reset', methods=['DELETE'])
def resetGuesses(id):
    guesses = Guess.query.filter(Guess.guesser_id == id).delete()
    db.session.commit()
    return {'message': 'Success!'}