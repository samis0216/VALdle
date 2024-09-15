import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
import { getGenresThunk } from "../../redux/genres"
import './Genres.css'

function Homepage() {
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const genres = Object.values(useSelector(state => state.genres))

    useEffect(() => {
        dispatch(getGenresThunk())
    }, [dispatch])

    return (
        <div className="genresBody">
            <div className="genreList">
                {genres.map((genre) => (
                    <div key={genre.id} className="genreTile">
                        <p style={{color: 'green'}}>{genre.genre_name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homepage
