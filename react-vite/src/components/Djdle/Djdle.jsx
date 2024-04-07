import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { getAllDJThunk, getRandomDJThunk, loadHintThunk } from "../../redux/djs";
import { postGuessThunk, resetGuessesThunk } from "../../redux/guesses";
import { getGenresThunk } from "../../redux/genres";
import '../GuessTable/GuessTable.css'
import './Djdle.css'

function Djdle() {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const random = useSelector((state) => state.djs.dj);
    const userId = useSelector((state) => state.session.user.id);
    const [guess, setGuess] = useState("");

    // const guesses = Object.values(useSelector((state) => state.guesses));
    const result = useSelector((state) => state.guesses.result);
    const genres = useSelector(state => state.genres)
    const hint = useSelector(state => state.djs.hint?.hint)
    const [results, setResults] = useState([]);
    const djs = Object.values(useSelector(state => state.djs))

    useEffect(() => {
        dispatch(getGenresThunk())
        dispatch(getAllDJThunk())
    }, [])

    useEffect(() => {
        if (result && !results.includes(result)) {
            results.push(result);
            setResults([...results]);
        } 
        if (results.length > 3) dispatch(loadHintThunk(random.id))
    }, [result]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("guess_name", guess);
        form.append("guesser_id", userId);
        dispatch(postGuessThunk(form, userId));
        setGuess('')
    };

    const handleReset = async (e) => {
        e.preventDefault()
        dispatch(resetGuessesThunk(userId))
        setResults([])
    }

    useEffect(() => {
        dispatch(getRandomDJThunk());
    }, []);

    return (
        <div className='DjdleMain'>
            <h1 style={{color: "white"}}>Welcome to DJdle!</h1>
            <p style={{color: "white"}}>Try to guess the DJ in the fewest tries possible!</p>
            <div>
                <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
                    <div>
                        <input
                            type="text"
                            placeholder="Type a DJ or DJ group..."
                            value={guess}
                            list="djs"
                            onChange={(e) => setGuess(e.target.value)}
                        />
                        <datalist id="djs" className="scrollable">
                            {guess.length && djs?.map((dj) => (
                                <option key={dj.stagename} value={dj.stagename}>
                                    {dj.stagename}
                                </option>
                            )
                            )}
                        </datalist>
                    </div>
                    <button onClick={(e) => handleSubmit(e)}>Guess</button>
                </div>
                <div style={{ display: "flex", justifyContent: "center", padding: 10, gap: 10 }}>
                    <button onClick={(e) => handleReset(e)}>Clear Guesses</button>
                    <button onClick={(e) => {handleReset(e); dispatch(getRandomDJThunk())}}>New DJ</button>
                </div>
                <div style={{ display: 'flex', justifyContent: "center" }}>
                    { results.length <= 3 && <p style={{color: "white"}}>Hint will appear after 4 incorrect guesses.</p>}
                    { results.length > 3 && <p style={{color: "white"}}>Hint: {hint}</p>}
                </div>
                <div style={{ display: 'flex', justifyContent: "center" }}>
                    <p style={{color: "white", fontStyle: 'italic'}}><i className="fa-solid fa-arrow-up" style={{ paddingRight: 5 }}></i>means the target is higher, <i className="fa-solid fa-arrow-down" style={{ paddingRight: 5 }}></i>means the target is lower.</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
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
                        <div style={{ width: '100%' }}>
                            {results.map((DJ) => (
                                <div key={DJ.stagename} className="tableHeaders">
                                    <p className={DJ.stagename == random.stagename ? "correctGuess" : "guessesBox"}>{DJ.stagename}</p>
                                    <p className={DJ.firstname == random.firstname ? "correctGuess" : "guessesBox"}>{DJ.firstname}</p>
                                    <p className={DJ.lastname == random.lastname ? "correctGuess" : "guessesBox"}>{DJ.lastname}</p>
                                    <p className={DJ.nationality == random.nationality ? "correctGuess" : "guessesBox"}>{DJ.nationality}</p>
                                    <p className={DJ.group == random.group ? "correctGuess" : "guessesBox"}>{DJ.group ? 'Group' : 'Solo'}</p>
                                    <p className={DJ.genre_id == random.genre_id ? "correctGuess" : "guessesBox"}>{genres[DJ.genre_id].genre_name}</p>
                                    <p className={DJ.debut_year == random.debut_year ? "correctGuess" : "guessesBox"}>{DJ.debut_year != random.debut_year && DJ.debut_year > random.debut_year ? <i className="fa-solid fa-arrow-down" style={{ paddingRight: 5 }}></i> : <i style={{ paddingRight: 5 }} className="fa-solid fa-arrow-up"></i>}{DJ.debut_year}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Djdle;
