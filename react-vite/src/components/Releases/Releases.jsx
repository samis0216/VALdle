import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import './Releases.css'
import { getAllDJThunk } from "../../redux/djs"

export default function Releases() {
    const dispatch = useDispatch()
    useEffect(()=> {
        getAllDJThunk()
    })
    return (
        <div>
            <p>Hot Re;eases This Week</p>
        </div>
    )
}
