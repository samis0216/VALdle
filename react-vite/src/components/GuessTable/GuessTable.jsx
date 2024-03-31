import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './GuessTable.css'

export default function GuessTable({target}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    useEffect(()=> {

    })

    return (
        <div className="guessTable">
            <div className="tableHeaders">
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p className="hedis">Stagename</p>
                </div>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p className="hedis">First Name(s)</p>
                </div>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p className="hedis">Last Names(s)</p>
                </div>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p className="hedis">Nationality</p>
                </div>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p className="hedis">Group?</p>
                </div>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p className="hedis">Genre</p>
                </div>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <p className="hedis">Debut Year</p>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}