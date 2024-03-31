from .db import db, environment, SCHEMA, add_prefix_for_prod

class Guess (db.Model):
    __tablename__ = 'guesses'
    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key = True)
    guess_name = db.Column(db.String(30), nullable=False)
    guesser_id = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'guess_name': self.guess_name,
            'guesser_id': self.guesser_id
        }