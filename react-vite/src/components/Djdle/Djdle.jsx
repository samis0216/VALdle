import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GuessTable from "../GuessTable/GuessTable";
import { getOneDJThunk, getRandomDJThunk } from "../../redux/djs";
import { postGuessThunk } from "../../redux/guesses";

function Djdle() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const random = useSelector((state) => state.djs.dj);
    const userId = useSelector((state) => state.session.user.id);
    const [guess, setGuess] = useState("");
    console.log(guess);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("guess_name", guess);
        form.append("guesser_id", userId);
        const newGuess = await dispatch(postGuessThunk(form));
    };

    useEffect(() => {
        dispatch(getRandomDJThunk());
    }, []);

    return (
        <div
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
            <h1>Welcome to DJdle!</h1>
            <div>
                <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
                    <input
                        type="text"
                        placeholder="Type a DJ or DJ group..."
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                    />
                    <button onClick={(e) => handleSubmit(e)}>Guess</button>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <GuessTable target={random} />
                </div>
            </div>
        </div>
    );
}

export default Djdle;
