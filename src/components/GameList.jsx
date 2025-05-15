import GameCard from "./GameCard";
import "./GameList.css";

const GameList = ({ games, onRemove }) => {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard key={game.id} game={game} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default GameList;
