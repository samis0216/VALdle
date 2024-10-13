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
        dispatch(getAllDJThunk())
    })
    return (
        <div>
            <h1 onClick={()=> navigate('/home')}>Hot Releases This Week</h1>
            <p>All the hottest tracks, all in one place.</p>

        </div>
    )
}
