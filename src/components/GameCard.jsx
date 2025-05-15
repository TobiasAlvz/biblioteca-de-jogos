
import "./GameCard.css";

const GameCard = ({ game, onRemove }) => {
  return (
    <div className="game-card">
      <img src={game.coverImage} alt={`Capa de ${game.title}`} />
      <div className="game-info">
        <h2>{game.title}</h2>
        <p className="year">{game.releaseYear}</p>
        <p className="description">{game.description}</p>
        <button onClick={() => onRemove(game.id)}>Remover</button>
      </div>
    </div>
  );
};

export default GameCard;
