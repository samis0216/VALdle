from .db import db, environment, SCHEMA, add_prefix_for_prod

class Genre (db.Model):
    __tablename__ = 'genres'
    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key = True)
    genre_name = db.Column(db.String(30), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'genre_name': self.genre_name
        }