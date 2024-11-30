import os

def renamerMP3(djSongs):
    try:
        if not os.path.exists(djSongs):
            print(f"The directory '{djSongs}' does not exist.")
            return
    except:
        return
    return
