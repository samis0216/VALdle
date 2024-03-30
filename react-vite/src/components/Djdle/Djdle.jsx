import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GuessTable from "../GuessTable/GuessTable";
import { getOneDJThunk, getRandomDJThunk } from "../../redux/djs";

function Djdle() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getRandomDJThunk())
    }, [dispatch])

    return (
        <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
            <h1>Welcome to DJdle!</h1>
            <div>
                <div style={{display: "flex", justifyContent: "center", padding: 20}}>
                    <input type="text" placeholder="Type a DJ or DJ group..."/>
                    <button>Guess</button>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <GuessTable />
                </div>
            </div>
        </div>
    )
}

export default Djdle