import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import Loading from "../components/Loading";

const PlayerStatus = (props) => {
    const [players, setPlayers] = useState(null);
    console.log(players);

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then((res) => {
                setPlayers(res.data);
            })
            .catch((err) => { console.log(err); })
    }, [])

    const active = (playerID) => {
        let newStatus = {};
        if (+props.number === 1) {
            newStatus = {
                game_1_status: "active"
            }
        }
        else if (+props.number === 2) {
            newStatus = {
                game_2_status: "active"
            }
        }
        else if (+props.number === 3) {
            newStatus = {
                game_3_status: "active"
            }
        }
        axios.put('http://localhost:8000/api/players/' + playerID, newStatus)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        axios.get('http://localhost:8000/api/players')
            .then((res) => {
                setPlayers(res.data);
            })
            .catch((err) => { console.log(err); })

    }

    const inactive = (playerID) => {
        let newStatus = {};
        if (+props.number === 1) {
            newStatus = {
                game_1_status: "inactive"
            }
        }
        else if (+props.number === 2) {
            newStatus = {
                game_2_status: "inactive"
            }
        }
        else if (+props.number === 3) {
            newStatus = {
                game_3_status: "inactive"
            }
        }
        axios.put('http://localhost:8000/api/players/' + playerID, newStatus)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        axios.get('http://localhost:8000/api/players')
            .then((res) => {
                setPlayers(res.data);
            })
            .catch((err) => { console.log(err); })
    }

    const undecided = (playerID) => {
        let newStatus = {};
        if (+props.number === 1) {
            newStatus = {
                game_1_status: "undecided"
            }
        }
        else if (+props.number === 2) {
            newStatus = {
                game_2_status: "undecided"
            }
        }
        else if (+props.number === 3) {
            newStatus = {
                game_3_status: "undecided"
            }
        }
        axios.put('http://localhost:8000/api/players/' + playerID, newStatus)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        axios.get('http://localhost:8000/api/players')
            .then((res) => {
                setPlayers(res.data);
            })
            .catch((err) => { console.log(err); })
    }

    const displayButtons = (player, number) => {
        let status = `game_${number}_status`;
        if (player[status] === "undecided") {
            return (
                <>
                    <button onClick={(event) => active(player._id)}>Playing</button>
                    <button onClick={(event) => inactive(player._id)}>Not Playing</button>
                    <button style={{ backgroundColor: "yellow" }}>Undecided</button>
                </>
            )
        }
        else if (player[status] === "inactive") {
            return (
                <>
                    <button onClick={(event) => active(player._id)}>Playing</button>
                    <button style={{ backgroundColor: "red" }}>Not Playing</button>
                    <button onClick={(event) => undecided(player._id)}>Undecided</button>
                </>
            )
        }
        else if (player[status] === "active") {
            return (
                <>
                    <button style={{ backgroundColor: "green" }}>Playing</button>
                    <button onClick={(event) => inactive(player._id)}>Not Playing</button>
                    <button onClick={(event) => undecided(player._id)}>Undecided</button>
                </>
            )
        };
    };

    if (players === null) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <h1>Players Status - Game {props.number}</h1>
            <nav>
                <Link to="/status/game/1">Game 1</Link> | <Link to="/status/game/2">Game 2</Link> | <Link to="/status/game/3">Game 3</Link>
            </nav>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => {
                        return (
                            <tr key={player._id}>
                                <td>{player.name}</td>
                                <td>
                                    {displayButtons(player, props.number)}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default PlayerStatus;