import React from 'react';
import { Link, Redirect, Router } from "@reach/router";
import './App.css';
import ManagerPlayers from './views/ManagePlayers';
import PlayerStatus from './views/PlayerStatus';

function App() {
  return (
    <>
      <Link to="/players/list">Manage Players</Link> <span> | </span>
      <Link to="/status/game/1">Manage Player Status</Link>
      <Router>
        <Redirect from="/" to="/players/list" />
        <ManagerPlayers path="/players/list" view="list" />
        <ManagerPlayers path="/players/addplayer" view="add" />
        <PlayerStatus path="/status/game/:number" />
      </Router>
    </>
  );
}

export default App;
