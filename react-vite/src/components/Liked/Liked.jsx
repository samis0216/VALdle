import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDJThunk } from "../../redux/djs";
// import { useNavigate } from "react-router-dom";

export default function Liked() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getGenresThunk())
        dispatch(getAllDJThunk())
    }, [dispatch])

    return (
        <div>
            <h1>Liked</h1>
            <div>
                <h2>DJs</h2>
                <h2>Songs</h2>
                <h2>Genres</h2>
            </div>
        </div>
    )
}
