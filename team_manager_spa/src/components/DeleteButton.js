import React from "react";

const DeleteButton = (props) => {
    const { playerID, setAlert } = props;
    const submitDelete = (event) => {
        setAlert([true, playerID]);
    }

    return (
        <>
            <button onClick={submitDelete}>Delete</button>
        </>
    )
};

export default DeleteButton;