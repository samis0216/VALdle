import os

def renamerMP3(djSongs):
    try:
        if not os.path.exists(djSongs):
            print(f"The directory '{djSongs}' does not exist.")
            return
    except:
        for filename in os.listdir(djSongs):
            if filename.endswith(".mp3"):
                old_path = os.path.join(djSongs, filename)
                name, ext = os.path.splitext(filename)
                new_name = f"{name}1{ext}"
                new_path = os.path.join(djSongs, new_name)
                os.rename(old_path, new_path)
                print(f"Renamed: {filename} -> {new_name}")

        print("Renaming completed.")
        return
    return
