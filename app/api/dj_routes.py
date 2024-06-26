from flask import Blueprint, jsonify
from app.models import DJ
from app.models.hint import Hint
import random

dj_routes = Blueprint('djs', __name__)


@dj_routes.route('/all')
def djs():
    djs = DJ.query.all()
    return [dj.to_dict() for dj in djs]

@dj_routes.route('/<int:id>')
def dj(id):
    dj = DJ.query.get(id)
    return dj.to_dict()

@dj_routes.route('/random')
def randomDj():
    djs = DJ.query.all()
    randoms = random.choice(djs)
    return randoms.to_dict()

@dj_routes.route('/<int:artist_id>/hint')
def loadHint(artist_id):
    hint = Hint.query.filter(Hint.artist_id == artist_id).first()
    return hint.to_dict()

@dj_routes.route('/<int:id>/like')
def favArtist(id):
    dj = DJ.query.get(id)
    fav = [dj.to_dict()]
    return fav
