import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './Releases.css'
import { getAllDJThunk } from "../../redux/djs"
import { useNavigate } from "react-router-dom"

export default function Releases() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=> {
        getAllDJThunk()
    })
    return (
        <div>
            <p>Hot Re;eases This Week</p>
        </div>
    )
}
