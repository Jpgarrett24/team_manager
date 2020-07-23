import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import PlayerList from "../components/PlayerList";
import AddForm from "../components/AddForm";

const ManagerPlayers = (props) => {
    const [players, setPlayers] = useState(null);
    const { view } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then((res) => {
                setPlayers(res.data);
            })
            .catch((err) => { console.log(err); })
    }, [])

    if (view === "list") {
        return (
            <section>
                <Link to="/players/list">List</Link>
                <Link to="/players/addplayer">Add Player</Link>
                <PlayerList players={players} setPlayers={setPlayers} />
            </section >
        )
    }
    else if (view === "add") {
        return (
            <section>
                <Link to="/players/list">List</Link>
                <Link to="/players/addplayer">Add Player</Link>
                <AddForm players={players} setPlayers={setPlayers} />
            </section >
        )
    }
}

export default ManagerPlayers;