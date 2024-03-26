from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SelectField
from wtforms.validators import DataRequired
# from app.api.aws_images import IMAGES_ALLOWED_EXTENSIONS
from flask_wtf.file import FileField, FileAllowed, FileRequired

class DJForm(FlaskForm):
    stagename = StringField('stagename', validators=[DataRequired()])
    firstname= StringField('firstname', validators=[DataRequired()])
    lastname = StringField('lastname', validators=[DataRequired()])
    debut_year = IntegerField('debut_year', validators=[DataRequired()])
    # img_file = FileField('Group Pic URL', validators=[FileRequired(), DataRequired()])
    genre_id = IntegerField('genre_id', validators=[DataRequired()])