from .db import db, environment, SCHEMA, add_prefix_for_prod

class DJ (db.Model):
    __tablename__ = 'djs'
    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key = True)
    stagename = db.Column(db.String(30), nullable=False)
    firstname = db.Column(db.String(30), nullable=False)
    lastname = db.Column(db.String(30), nullable=False)
    debut_year = db.Column(db.Integer, nullable=False)
    genre_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('genres.id')), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'stagename': self.stagename,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'debut_year': self.debut_year,
            'genre_id': self.genre_id
        }
    

