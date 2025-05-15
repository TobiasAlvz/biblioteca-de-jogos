import GameCard from "./GameCard";
import styles from "./GameList.module.css";

const GameList = ({ games, onRemove }) => {
  return (
    <div className={styles.gameList}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default GameList;