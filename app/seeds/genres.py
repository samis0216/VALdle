from app.models import db, environment, SCHEMA
from app.models.genre import Genre
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_genres():
    acid_house = Genre(genre_name='Acid House')
    deep_house = Genre(genre_name='Deep House')
    progressive = Genre(genre_name='Progressive House')
    tech_house = Genre(genre_name='Tech House')
    main_stage = Genre(genre_name='Main Stage')
    trance = Genre(genre_name='Trance')
    house = Genre(genre_name='House')
    dubstep = Genre(genre_name='Dubstep')
    trap = Genre(genre_name='Trap')
    riddim = Genre(genre_name='Riddim')
    hardstyle = Genre(genre_name='Hardstyle')
    electro_house = Genre(genre_name='Electro House')
    future_bass = Genre(genre_name='Future Bass')
    bass_house = Genre(genre_name='Bass House')
    chillstep = Genre(genre_name='Chillstep')
    drum_and_bass = Genre(genre_name='Drum and Bass')
    techno = Genre(genre_name='Techno')
    psytrance = Genre(genre_name='Psytrance')
    ambient = Genre(genre_name='Ambient')
    glitch_hop = Genre(genre_name='Glitch Hop')
    moombahton = Genre(genre_name='Moombahton')
    hard_dance = Genre(genre_name='Hard Dance')
    downtempo = Genre(genre_name='Downtempo')
    progressive_trance = Genre(genre_name='Progressive Trance')
    industrial = Genre(genre_name='Industrial')
    breakbeat = Genre(genre_name='Breakbeat')
    future_house = Genre(genre_name='Future House')
    tropical_house = Genre(genre_name='Tropical House')
    uk_hardcore = Genre(genre_name='UK Hardcore')
    liquid_dnb = Genre(genre_name='Liquid Drum and Bass')
    big_room = Genre(genre_name='Big Room')
    nu_disco = Genre(genre_name='Nu Disco')

    db.session.add(acid_house)
    db.session.add(main_stage)
    db.session.add(riddim)
    db.session.add(deep_house)
    db.session.add(progressive)
    db.session.add(tech_house)
    db.session.add(trance)
    db.session.add(house)
    db.session.add(dubstep)
    db.session.add(trap)
    db.session.add(hardstyle)
    db.session.add(electro_house)
    db.session.add(future_bass)
    db.session.add(bass_house)
    db.session.add(chillstep)
    db.session.add(drum_and_bass)
    db.session.add(techno)
    db.session.add(psytrance)
    db.session.add(ambient)
    db.session.add(glitch_hop)
    db.session.add(moombahton)
    db.session.add(hard_dance)
    db.session.add(downtempo)
    db.session.add(progressive_trance)
    db.session.add(industrial)
    db.session.add(breakbeat)
    db.session.add(future_house)
    db.session.add(tropical_house)
    db.session.add(uk_hardcore)
    db.session.add(liquid_dnb)
    db.session.add(big_room)
    db.session.add(nu_disco)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_genres():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.genres RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM genres"))
        
    db.session.commit()