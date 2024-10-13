import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import './Releases.css'
import { getAllDJThunk } from "../../redux/djs"
import { useNavigate } from "react-router-dom"

export default function Releases() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const djs = useSelector((state) => state.djs)
    const releases = useSelector((state) => state.releases)
    const [selectedDJ, setSelectedDj] = useState(null)
    useEffect(() => {
        dispatch(getAllDJThunk())
    })
    return (
        <div>
            <h1 onClick={() => navigate('/home')}>Hot Releases This Week</h1>
            <p>All the hottest tracks, all in one place.</p>
            <select id="dj-select" value={selectedDJ} onChange={handleChange}>
                <option value="" onChange={(e) => setSelectedDj(e.target.value)}>--Select a DJ--</option>
                {djs.map((dj, index) => (
                    <option key={index} value={dj}>
                        {dj}
                    </option>
                ))}
            </select>
            {selectedDJ && (
                <div>
                    <h2>Recent Releases by {selectedDJ}:</h2>
                    <ul>
                        {releases && releases[selectedDJ].map((release, index) => (
                            <li key={index}>{release}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
