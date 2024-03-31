from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class GuessForm(FlaskForm):
    guess_name = StringField('name', validators=[DataRequired()])
    guesser_id = IntegerField('guesser_id', validators=[DataRequired()])