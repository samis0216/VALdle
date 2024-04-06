from .db import db, environment, SCHEMA, add_prefix_for_prod

class Hint (db.Model):
    __tablename__ = 'hints'
    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key = True)
    artist_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('djs.id')), nullable=False)
    hint = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'artist_id': self.artist_id,
            'hint': self.hint
        }