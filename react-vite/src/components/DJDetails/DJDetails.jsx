import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOneDJThunk } from "../../redux/djs"

export default function DJDetails({dj}) {
    const dispatch = useDispatch()
    const dj = useSelector((state) => state.dj)
    useEffect(() => {
        dispatch(getOneDJThunk(dj.id))
    }, [dj])
    if (dj) return (
        <div>
            <h1 style={{color: 'white'}}>{dj.stagename}</h1>
            <p>{dj.genre}</p>
        </div>
    )
}