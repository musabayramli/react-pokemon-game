import React, { useState } from "react";
import PokemonCard from "../cards/PokemonCard";
import Modal from "../modal/Modal";

const pokemonData = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

const Game = () => {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [started, setStarted] = useState(false);
  const [round, setRound] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const startGame = () => {
    const shuffledData = shuffleArray([...pokemonData]);
    const team1 = shuffledData.slice(0, 4);
    const team2 = shuffledData.slice(4, 8);
    setTeam1(team1);
    setTeam2(team2);
    setStarted(true);
    setRound(1); 
    setShowModal(false); 
  };

  const nextRound = () => {
    const shuffledData = shuffleArray([...pokemonData]);
    const team1 = shuffledData.slice(0, 4);
    const team2 = shuffledData.slice(4, 8);
    setTeam1(team1);
    setTeam2(team2);
    setRound(round + 1);

    if (round === 4) {
      setShowModal(true); 
    }
  };

  const team1Score = team1.reduce((sum, p) => sum + p.base_experience, 0);
  const team2Score = team2.reduce((sum, p) => sum + p.base_experience, 0);

  const winner = team1Score > team2Score ? "Team 1 Wins!" : "Team 2 Wins!";
  const loser = team1Score > team2Score ? "Team 2 Loses" : "Team 1 Loses";

  const closeModal = () => {
    setShowModal(false);
    setStarted(false);  
    setRound(1); 
  };

  return (
    <div className="game-container">
      <h1>Pokedex</h1>
      {!started && (
        <button className="btn start-btn" onClick={startGame}>
          Start Game
        </button>
      )}

      {started && round <= 4 && (
        <button className="btn restart-btn" onClick={nextRound}>
          Next Round
        </button>
      )}

      {started && round <= 4 && (
        <>
          <div
            className={`team ${winner === "Team 1 Wins!" ? "winner" : "loser"}`}
          >
            <h2>{winner === "Team 1 Wins!" ? "Winner" : "Loser"}</h2>
            <p>{team1Score}</p>
            <div className="team-cards">
              {team1.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
          </div>

          <h2>VS</h2>


          <div
            className={`team ${winner === "Team 2 Wins!" ? "winner" : "loser"}`}
          >
            <h2>{winner === "Team 2 Wins!" ? "Winner" : "Loser"}</h2>
            <p>{team2Score}</p>
            <div className="team-cards">
              {team2.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
          </div>
        </>
      )}

      {showModal && <Modal winner={winner} closeModal={closeModal} />}
    </div>
  );
};

export default Game;
