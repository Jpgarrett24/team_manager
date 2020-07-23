import React, { useState } from "react";
import Loading from "./Loading";
import DeleteButton from "./DeleteButton";
import ConfirmDelete from "./ConfirmDelete";

const PlayerList = (props) => {
    const { players, setPlayers } = props;
    const [alert, setAlert] = useState([false, null])

    const displayAlert = () => { return (alert[0] ? <ConfirmDelete playerID={alert[1]} players={players} setPlayers={setPlayers} setAlert={setAlert} /> : <></>) }

    if (players === null) {
        return (
            <Loading />
        )
    }

    return (
        <>
            {displayAlert()}
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => {
                        return (
                            <tr key={player._id}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td><DeleteButton playerID={player._id} players={players} setPlayers={setPlayers} alert={alert} setAlert={setAlert} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default PlayerList;