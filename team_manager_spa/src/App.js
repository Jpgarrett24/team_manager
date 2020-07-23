import React from 'react';
import { Link, Redirect, Router } from "@reach/router";
import './App.css';
import ManagerPlayers from './views/ManagePlayers';

function App() {
  return (
    <>
      <Link to="/players/list">Manage Players</Link>
      <Router>
        <Redirect from="/" to="/players/list" />
        <ManagerPlayers path="/players/list" view="list" />
        <ManagerPlayers path="/players/addplayer" view="add" />
      </Router>
    </>
  );
}

export default App;
