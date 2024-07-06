import { useSelector } from "react-redux"

export default function DJDetails({dj}) {
    const dj = useSelector((state) => state.dj)
    return (
        <div>
            <h1 style={{color: 'white'}}>{dj.stagename}</h1>
            <p>{dj.genre}</p>
        </div>
    )
}