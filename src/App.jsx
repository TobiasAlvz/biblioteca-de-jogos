import { useEffect, useState } from "react";
import initialGames from "./data/initialGames";
import GameForm from "./components/GameForm";
import GameList from "./components/GameList";
import "./index.css";

const App = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("obc-game-lib");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setGames(parsed);
        }
      } catch (e) {
        console.error("Erro ao carregar localStorage:", e);
        localStorage.removeItem("obc-game-lib");
      }
    }
  }, []);

  const addGame = ({ title, cover, releaseYear, description }) => {
    const alreadyExists = games.some((g) => g.title === title);
    if (alreadyExists) {
      return { error: "Este jogo já está na sua biblioteca." };
    }

    const id = Math.floor(Math.random() * 1000000);
    const newGame = {
      id,
      title,
      coverImage: cover,
      releaseYear,
      description,
    };
    const updatedGames = [...games, newGame];
    setGames(updatedGames);
    localStorage.setItem("obc-game-lib", JSON.stringify(updatedGames));
    return { success: true };
  };

  const removeGame = (id) => {
    const updatedGames = games.filter((g) => g.id !== id);
    setGames(updatedGames);
    localStorage.setItem("obc-game-lib", JSON.stringify(updatedGames));
  };

  return (
    <main className="app">
      <h1>Biblioteca de Jogos</h1>
      <GameForm onAdd={addGame} initialGames={initialGames} currentGames={games} />
      <GameList games={games} onRemove={removeGame} />
    </main>
  );
};

export default App;