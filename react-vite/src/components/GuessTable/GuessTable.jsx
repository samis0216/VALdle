import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './GuessTable.css'

export default function GuessTable() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    useEffect(()=> {

    })

    return (
        <div className="guessTable">
            <div className="tableHeaders">
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p style={{borderBottom: '1px solid black', padding: 10}}>Stagename</p>
                </div>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p style={{borderBottom: '1px solid black', padding: 10}}>First Name(s)</p>
                </div>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p style={{borderBottom: '1px solid black', padding: 10}}>Last Names(s)</p>
                </div>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p style={{borderBottom: '1px solid black', padding: 10}}>Nationality</p>
                </div>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p style={{borderBottom: '1px solid black', padding: 10}}>Group?</p>
                </div>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p style={{borderBottom: '1px solid black', padding: 10}}>Genre</p>
                </div>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p style={{borderBottom: '1px solid black', padding: 10}}>Debut Year</p>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}