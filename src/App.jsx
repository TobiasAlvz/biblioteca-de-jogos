import initialGames from "./data/initialGames";
import GameForm from "./components/GameForm";
import GameList from "./components/GameList";

const App = () => {
  const [games, setGames] = useState(() => {
    const stored = localStorage.getItem("obc-game-lib");
    if (stored) return JSON.parse(stored);
    localStorage.setItem("obc-game-lib", JSON.stringify(initialGames));
    return initialGames;
  });

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);
    const newGame = {
      id,
      title,
      coverImage: cover,
      releaseYear: new Date().getFullYear(),
      description: "Novo jogo adicionado pelo usuário.",
    };
    const updatedGames = [...games, newGame];
    setGames(updatedGames);
    localStorage.setItem("obc-game-lib", JSON.stringify(updatedGames));
  };

  const removeGame = (id) => {
    const updatedGames = games.filter((g) => g.id !== id);
    setGames(updatedGames);
    localStorage.setItem("obc-game-lib", JSON.stringify(updatedGames));
  };

  return (
    <main className="app">
      <h1>Biblioteca de Jogos</h1>
      <GameForm onAdd={addGame} />
      <GameList games={games} onRemove={removeGame} />
    </main>
  );
};

export default App;
