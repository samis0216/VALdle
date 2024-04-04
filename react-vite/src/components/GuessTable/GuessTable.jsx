import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./GuessTable.css";
import { getGenresThunk } from "../../redux/genres";

export default function GuessTable({ target }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const guesses = Object.values(useSelector((state) => state.guesses));
    const result = useSelector((state) => state.guesses.result);
    const genres = useSelector(state => state.genres)
    const [results, setResults] = useState([]);
    console.log(genres);

    useEffect(()=> {
        dispatch(getGenresThunk())
    }, [dispatch])

    useEffect(() => {
        if (result && !results.includes(result)) {
            results.push(result);
            setResults(results);
        }
    }, [result]);

    return (
        <div className="guessTable">
            <div className="tableHeaders">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p className="hedis">Stagename</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p className="hedis">First Name(s)</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p className="hedis">Last Names(s)</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p className="hedis">Nationality</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p className="hedis">Group?</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p className="hedis">Genre</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p className="hedis">Debut Year</p>
                </div>
            </div>
            <div style={{width: '100%'}}>
                {results.map((DJ) => (
                    <div key={DJ.stagename} className="tableHeaders">
                        <p className={DJ.stagename == target.stagename ? "correctGuess" : "guessesBox"}>{DJ.stagename}</p>
                        <p className={DJ.firstname == target.firstname ? "correctGuess" : "guessesBox"}>{DJ.firstname}</p>
                        <p className={DJ.lastname == target.lastname ? "correctGuess" : "guessesBox"}>{DJ.lastname}</p>
                        <p className={DJ.nationality == target.nationality ? "correctGuess" : "guessesBox"}>{DJ.nationality}</p>
                        <p className={DJ.group == target.group ? "correctGuess" : "guessesBox"}>{DJ.group ? 'True' : 'Solo'}</p>
                        <p className={DJ.genre_id == target.genre_id ? "correctGuess" : "guessesBox"}>{genres[DJ.genre_id].genre_name}</p>
                        <p className={DJ.debut_year == target.debut_year ? "correctGuess" : "guessesBox"}>{DJ.debut_year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
