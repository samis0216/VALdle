import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOneDJThunk } from "../../redux/djs"
import './DJDetails.css'

export default function DJDetails({dj}) {
    const dispatch = useDispatch()
    const djs = useSelector((state) => state.djs)
    // useEffect(() => {
    //     dispatch(getOneDJThunk(dj.id))
    // }, [dj])
    const [currentDJ, setCurrentDJ] = useState('');

    const getRandomDJ = () => {
        const randomIndex = Math.floor(Math.random() * djs.length);
        return djs[randomIndex];
    };

    useEffect(() => {
        setCurrentDJ(getRandomDJ());

        const interval = setInterval(() => {
            setCurrentDJ(getRandomDJ());
        }, 10000);

        return () => clearInterval(interval);
    }, [djs]);

    if (dj) return (
        <div>
            <p>Today's Random DJ: {dj.stagename}</p>
            <p>Your new binge.</p>
            <h1 className="headline">{dj.stagename}</h1>
            <p>{dj.genre}</p>
            <p>{dj.firstName}</p>
            <p>{dj.lastName}</p>
            <p>{dj.description}</p>
        </div>
    )
}
