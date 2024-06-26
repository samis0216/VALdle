from flask.cli import AppGroup
from .users import seed_users, undo_users
from .djs import seed_djs, undo_djs
from .genres import seed_genres, undo_genres
from .hints import seed_hints, undo_hints

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo 
        # command, which will  truncate all tables prefixed with 
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_hints()
        undo_djs()
        undo_genres()
        undo_users()
    seed_users()
    seed_genres()
    seed_djs()
    seed_hints()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_hints()
    undo_djs()
    undo_genres()
    undo_users()
    # Add other undo functions here
