import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDJThunk } from "../../redux/djs";
import { useNavigate } from "react-router-dom";

export default function Liked() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const likedDjs = useSelector((state) => state.liked.djs)
    const likedSongs = useSelector((state) => state.liked.songs)
    const likedGenres = useSelector((state) => state.liked.genres)

    useEffect(()=> {
        dispatch(getAllDJThunk())
        dispatch(getLikedDJsThunk())
    }, [dispatch])

    return (
        <div>
            <h1>Your Likes</h1>
            <div>
                <div>
                    <h2>DJs</h2>
                    {likedDjs && likedDjs.map((dj) => (
                        <h1>{dj.name}</h1>
                    ))}
                </div>
                <div>
                    <h2>Songs</h2>
                    {likedSongs && likedSongs.map((song) => (
                        <h1>{song.songName}</h1>
                    ))}
                </div>
                <div>
                    <h2>Genres</h2>
                    {likedGenres && likedGenres.map((genre) => (
                        <h3 className="headline">{genre.name}</h3>
                    ))}
                </div>
            </div>
        </div>
    )
}
