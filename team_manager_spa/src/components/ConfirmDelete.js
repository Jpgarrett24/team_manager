import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const ConfirmDelete = (props) => {

    const { players, setPlayers, playerID, setAlert } = props;

    const confirmDelete = (event) => {
        axios.delete('http://localhost:8000/api/players/' + playerID)
            .then((res) => {
                console.log(res.data.name + ' was cut from the team because he was a scrub.');
                setPlayers(players.filter((player) => player._id !== playerID));
                setAlert([false, null]);
                navigate('/players/list');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section id="confirm">
            <h1 style={{ color: "red" }}>Are you sure you want to cut this scrub?</h1>
            <button onClick={(event) => { setAlert([false, null]); navigate('/players/list'); }}>No</button>
            <button onClick={confirmDelete}>Cut this scrub</button>
        </section>
    );
}
export default ConfirmDelete;