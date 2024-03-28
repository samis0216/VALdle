import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
import { getGenresThunk } from "../../redux/genres"

function Homepage() {
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const genres = Object.values(useSelector(state => state.genres))

    console.log(genres)

    useEffect(() => {
        dispatch(getGenresThunk())
    }, [dispatch])

    return (
        <div>
            {genres.forEach(genre => 
                <div>
                    <h3>{genre.genre_name}</h3>
                </div>
                )}
        </div>
    )
}

export default Homepage