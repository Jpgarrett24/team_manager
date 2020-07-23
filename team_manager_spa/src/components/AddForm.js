import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const AddForm = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState(null);

    const addPlayer = (event) => {
        event.preventDefault();
        const newPlayer = {
            name,
            position,
        };
        axios.post('http://localhost:8000/api/players', newPlayer)
            .then((res) => {
                navigate('/players/list');
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            })
    };

    const frontValidator = () => {
        return (name.length < 2 && name.length > 0 ?
            <small style={{ color: "red" }}>Player's name must be a minimum of 2 characters</small> :
            <></>)
    }

    const displayError = () => {
        return (errors && (<small style={{ color: "red" }}>{errors?.name?.properties?.message}</small>))
    }

    return (
        <>
            <form onSubmit={addPlayer}>
                <h3>Add Player</h3>
                <label htmlFor="name">Player Name:</label>
                <input type="text" name="name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                <label htmlFor="position">Preferred Position:</label>
                <input type="text" name="position" id="position" value={position} onChange={(event) => setPosition(event.target.value)} />
                <button disabled={name.length > 1 ? false : true}>Add Player</button>
            </form>
            {frontValidator()}
            {displayError()}
        </>
    );
};

export default AddForm;