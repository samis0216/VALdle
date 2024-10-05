import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './Releases.css'
import { getAllDJThunk } from "../../redux/djs"
import { useNavigate } from "react-router-dom"

export default function Releases() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const djs = useSelector((state) => state.djs)
    useEffect(()=> {
        getAllDJThunk()
    })
    return (
        <div>
            <h1>Hot Releases This Week</h1>
            <p>All the hottest tracks, all in one place.</p>
            {djs.map(dj) => (
                <p>{dj.name}</p>
            )
        </div>
    )
}
