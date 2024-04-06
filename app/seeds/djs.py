from app.models import db, DJ, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_djs():
    john_summit = DJ(stagename='John Summit', firstname='John', lastname='Schuster', debut_year=2020, genre_id=2, group=False, nationality='American')
    deadmau5 = DJ(stagename='deadmau5', firstname='Joel', lastname='Zimmerman', debut_year=2005, genre_id=2, group=False, nationality='Canadian')
    carl_cox = DJ(stagename='Carl Cox', firstname='Carl', lastname='Cox', debut_year=1985, genre_id=3, group=False, nationality='British')
    armin_van_buuren = DJ(stagename='Armin van Buuren', firstname='Armin', lastname='van Buuren', debut_year=1995, genre_id=4, group=False, nationality='Dutch')
    martin_garrix = DJ(stagename='Martin Garrix', firstname='Martijn', lastname='Garritsen', debut_year=2012, genre_id=5, group=False, nationality='Dutch')
    diplo = DJ(stagename='Diplo', firstname='Thomas', lastname='Pentz', debut_year=2004, genre_id=6, group=False, nationality='American')
    tiesto = DJ(stagename='Tiësto', firstname='Tijs', lastname='Verwest', debut_year=1994, genre_id=4, group=False, nationality='Dutch')
    skrillex = DJ(stagename='Skrillex', firstname='Sonny', lastname='Moore', debut_year=2010, genre_id=6, group=False, nationality='American')
    calvin_harris = DJ(stagename='Calvin Harris', firstname='Adam', lastname='Wiles', debut_year=2002, genre_id=2, group=False, nationality='British')
    above_and_beyond = DJ(stagename='Above & Beyond', firstname='Jonathan', lastname='Grant', debut_year=2000, genre_id=2, group=True, nationality='British')
    eric_prydz = DJ(stagename='Eric Prydz', firstname='Eric', lastname='Prydz', debut_year=2001, genre_id=2, group=False, nationality='Swedish')
    nina_kraviz = DJ(stagename='Nina Kraviz', firstname='Nina', lastname='Kraviz', debut_year=2009, genre_id=14, group=False, nationality='Russian')
    richie_hawtin = DJ(stagename='Richie Hawtin', firstname='Richard', lastname='Hawtin', debut_year=1989, genre_id=14, group=False, nationality='Canadian')
    charlotte_de_witte = DJ(stagename='Charlotte de Witte', firstname='Charlotte', lastname='de Witte', debut_year=2010, genre_id=14, group=False, nationality='Belgian')
    david_guetta = DJ(stagename='David Guetta', firstname='David', lastname='Guetta', debut_year=2002, genre_id=2, group=False, nationality='French')
    adam_beyer = DJ(stagename='Adam Beyer', firstname='Adam', lastname='Beyer', debut_year=1993, genre_id=14, group=False, nationality='Swedish')
    steve_aoki = DJ(stagename='Steve Aoki', firstname='Steve', lastname='Aoki', debut_year=2007, genre_id=9, group=False, nationality='American')
    alison_wonderland = DJ(stagename='Alison Wonderland', firstname='Alex', lastname='Sholler', debut_year=2012, genre_id=7, group=False, nationality='Australian')
    dillon_francis = DJ(stagename='Dillon Francis', firstname='Dillon', lastname='Francis', debut_year=2010, genre_id=21, group=False, nationality='American')
    kaskade = DJ(stagename='Kaskade', firstname='Ryan', lastname='Raddon', debut_year=2001, genre_id=2, group=False, nationality='American')
    marshmello = DJ(stagename='Marshmello', firstname='Chris', lastname='Comstock', debut_year=2015, genre_id=7, group=False, nationality='American')
    porter_robinson = DJ(stagename='Porter Robinson', firstname='Porter', lastname='Robinson', debut_year=2010, genre_id=6, group=False, nationality='American')
    paul_van_dyk = DJ(stagename='Paul van Dyk', firstname='Matthias', lastname='Paul', debut_year=1990, genre_id=4, group=False, nationality='German')
    excision = DJ(stagename='Excision', firstname='Jeff', lastname='Abel', debut_year=2007, genre_id=6, group=False, nationality='Canadian')
    knock2 = DJ(stagename='Knock2', firstname='Richard', lastname='Nakhonethap', debut_year=2019, genre_id=9, group=False, nationality='Laos')
    iso_xo = DJ(stagename='Isoxo', firstname='Julian', lastname='Isorena', debut_year=2018, genre_id=9, group=False, nationality='Phillipines')
    rl_grime = DJ(stagename='RL Grime', firstname='Henry', lastname='Steinway', debut_year=2011, genre_id=7, group=False, nationality='American')
    baauer = DJ(stagename='Baauer', firstname='Harry', lastname='Bauer Rodrigues', debut_year=2006, genre_id=7, group=False, nationality='American')
    san_holo = DJ(stagename='San Holo', firstname='Sander', lastname='van Dijck', debut_year=2014, genre_id=12, group=False, nationality='Dutch')
    whethan = DJ(stagename='Whethan', firstname='Ethan', lastname='Snoreck', debut_year=2015, genre_id=10, group=False, nationality='American')
    flume = DJ(stagename='Flume', firstname='Harley', lastname='Streten', debut_year=2011, genre_id=10, group=False, nationality='Australian')
    seven_lions = DJ(stagename='Seven Lions', firstname='Jeff', lastname='Montalvo', debut_year=2010, genre_id=12, group=False, nationality='American')
    said_the_sky = DJ(stagename='Said The Sky', firstname='Trevor', lastname='Christensen', debut_year=2014, genre_id=12, group=False, nationality='American')
    dabin = DJ(stagename='Dabin', firstname='Dabin', lastname='Lee', debut_year=2012, genre_id=12, group=False, nationality='Canadian')
    liquid_stranger = DJ(stagename='Liquid Stranger', firstname='Martin', lastname='Staaf', debut_year=2003, genre_id=13, group=False, nationality='Swedish')
    space_laces = DJ(stagename='Space Laces', firstname='Ian', lastname='Slider', debut_year=2013, genre_id=6, group=False, nationality='American')
    acraze = DJ(stagename='ACRAZE', firstname='Alex', lastname='Szot', debut_year=2018, genre_id=7, group=False, nationality='American')
    armnhmr = DJ(stagename='ARMNHMR', firstname='Joseph, Joseph', lastname='Abella, Chung', debut_year=2014, genre_id=7, group=True, nationality='American')
    zeds_dead = DJ(stagename='Zeds Dead', firstname='Zachary, Dylan', lastname='Rathk', debut_year=2004, genre_id=6, group=True, nationality='Canadian')
    dog_blood = DJ(stagename='Dog Blood', firstname='Skrillex, Boys', lastname='Noize', debut_year=2012, genre_id=6, group=True, nationality='American, German')
    galantis = DJ(stagename='Galantis', firstname='Christian, Linus', lastname='Eklöw, Åkesson', debut_year=2012, genre_id=5, group=True, nationality='Swedish')
    slander = DJ(stagename='Slander', firstname='Derek, Scott', lastname='Andersen, Land', debut_year=2010, genre_id=8, group=True, nationality='American')
    yellow_claw = DJ(stagename='Yellow Claw', firstname='Jim, Nils', lastname='Aasgård, Visser', debut_year=2010, genre_id=9, group=True, nationality='Dutch')
    flosstradamus = DJ(stagename='Flosstradamus', firstname='Curt', lastname='Cameruci', debut_year=2006, genre_id=9, group=True, nationality='American')
    nervo = DJ(stagename='Nervo', firstname='Miriam, Olivia', lastname='Nervo', debut_year=2005, genre_id=9, group=True, nationality='Australian')
    chainsmokers = DJ(stagename='The Chainsmokers', firstname='Andrew, Alex', lastname='Taggart, Pall', debut_year=2012, genre_id=9, group=True, nationality='American')
    chase_and_status = DJ(stagename='Chase & Status', firstname='Saul, William', lastname='Milton, Kennard', debut_year=2003, genre_id=13, group=True, nationality='British')
    maup = DJ(stagename='Mau P', firstname='Mauits', lastname='Jan Westveen', debut_year=2022, genre_id=7, nationality='Dutch', group=False)
    virtual = DJ(stagename='Virtual Riot', firstname='Christian', lastname='Brunn', debut_year=2011, genre_id=8, group=False, nationality='German')
    jauz = DJ(stagename='Jauz', firstname='Samuel', lastname='Vogel', debut_year=2013, genre_id=9, group=False, nationality='American')
    reaper = DJ(stagename='REAPER', firstname='Zack', lastname='Burgett', debut_year=2019, genre_id=15, group=False, nationality='American')
    sullivan_king = DJ(stagename='Sullivan King', firstname='Keaton', lastname='Prescott', debut_year=2014, genre_id=8, group=False, nationality='American')
    subtronics = DJ(stagename='Subtronics', firstname='Jesse', lastname='Kodat', debut_year=2011, genre_id=8, group=False, nationality='American')
    eliminate = DJ(stagename='Eliminate', firstname='Nate', lastname='Compton', debut_year=2013, genre_id=13, group=False, nationality='American')
    fisher = DJ(stagename='Fisher', firstname='Paul', lastname='Fisher', debut_year=2016, genre_id=16, group=False, nationality='Australian')
    fred_again = DJ(stagename='Fred Again..', firstname='Frederick', lastname='Gibson', debut_year=2015, genre_id=6, group=False, nationality='British')
    matroda = DJ(stagename='Matroda', firstname='Matija', lastname='Rodic', debut_year=2014, genre_id=9, group=False, nationality='Croatian')
    discolines = DJ(stagename='Discolines', firstname='Thadeus', lastname='Labuszewski', debut_year=2019, genre_id=4, group=False, nationality='American')
    chyl = DJ(stagename='CHYL', firstname='Ruochen', lastname='Shi', debut_year=2019, genre_id=13, group=False, nationality='Chinese')
    wooli = DJ(stagename='Wooli', firstname='Adam', lastname='Puleo', debut_year=2015, genre_id=8, group=False, nationality='American')
    nghtmre = DJ(stagename='NGHTMRE', firstname='Tyler', lastname='Marenyi', debut_year=2014, genre_id=8, group=False, nationality='American')
    trivecta = DJ(stagename='Trivecta', firstname='Sam', lastname='Dobkin', debut_year=2011, genre_id=8, group=False, nationality='American')
    k_id = DJ(stagename='K?D', firstname='Patrick', lastname='Cybulski', debut_year=2015, genre_id=9, group=False, nationality='American')
    wax_motif = DJ(stagename='Wax Motif', firstname='Danny', lastname='Chien', debut_year=2008, genre_id=9, group=False, nationality='Australian')
    valentino_khan = DJ(stagename='Valentino Khan', firstname='Valentino', lastname='Khan', debut_year=2012, genre_id=13, group=False, nationality='American')
    gryffin = DJ(stagename='Gryffin', firstname='Dan', lastname='Griffith', debut_year=2014, genre_id=12, group=False, nationality='American')
    svdden_death = DJ(stagename='SVDDEN DEATH', firstname='Danny', lastname='Howland', debut_year=2015, genre_id=8, group=False, nationality='American')
    kai_wachi = DJ(stagename='Kai Wachi', firstname='Kekai', lastname='Wachi', debut_year=2012, genre_id=8, group=False, nationality='American')
    ZHU = DJ(stagename='ZHU', firstname='Steven', lastname='Zhu', debut_year=2014, genre_id=9, group=False, nationality='American')
    ray_volpe = DJ(stagename='Ray Volpe', firstname='Raymond', lastname='Volpe Jr.', debut_year=2012, genre_id=9, group=False, nationality='American')
    dom_dolla = DJ(stagename='Dom Dolla', firstname='Dominic', lastname='Matheson', debut_year=2014, genre_id=6, group=False, nationality='Australian')
    DIESEL = DJ(stagename='DIESEL', firstname='Shaquille', lastname='O Neal', debut_year=2018, genre_id=3, group=False, nationality='American')

    db.session.add(john_summit)
    db.session.add(deadmau5)
    db.session.add(carl_cox)
    db.session.add(armin_van_buuren)
    db.session.add(martin_garrix)
    db.session.add(diplo)
    db.session.add(tiesto)
    db.session.add(skrillex)
    db.session.add(calvin_harris)
    db.session.add(above_and_beyond)
    db.session.add(eric_prydz)
    db.session.add(nina_kraviz)
    db.session.add(richie_hawtin)
    db.session.add(charlotte_de_witte)
    db.session.add(david_guetta)
    db.session.add(adam_beyer)
    db.session.add(steve_aoki)
    db.session.add(alison_wonderland)
    db.session.add(dillon_francis)
    db.session.add(kaskade)
    db.session.add(marshmello)
    db.session.add(porter_robinson)
    db.session.add(paul_van_dyk)
    db.session.add(excision)
    db.session.add(knock2)
    db.session.add(iso_xo)
    db.session.add(rl_grime)
    db.session.add(baauer)
    db.session.add(san_holo)
    db.session.add(whethan)
    db.session.add(flume)
    db.session.add(seven_lions)
    db.session.add(said_the_sky)
    db.session.add(dabin)
    db.session.add(liquid_stranger)
    db.session.add(space_laces)
    db.session.add(acraze)
    db.session.add(armnhmr)
    db.session.add(zeds_dead)
    db.session.add(dog_blood)
    db.session.add(galantis)
    db.session.add(slander)
    db.session.add(yellow_claw)
    db.session.add(flosstradamus)
    db.session.add(nervo)
    db.session.add(chainsmokers)
    db.session.add(chase_and_status)
    db.session.add(chainsmokers)
    db.session.add(jauz)
    db.session.add(reaper)
    db.session.add(sullivan_king)
    db.session.add(subtronics)
    db.session.add(eliminate)
    db.session.add(fisher)
    db.session.add(fred_again)
    db.session.add(matroda)
    db.session.add(discolines)
    db.session.add(chyl)
    db.session.add(wooli)
    db.session.add(nghtmre)
    db.session.add(trivecta)
    db.session.add(k_id)
    db.session.add(wax_motif)
    db.session.add(valentino_khan)
    db.session.add(gryffin)
    db.session.add(svdden_death)
    db.session.add(kai_wachi)
    db.session.add(ZHU)
    db.session.add(ray_volpe)
    db.session.add(dom_dolla)
    db.session.add(DIESEL)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_djs():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.djs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM djs"))
        
    db.session.commit()