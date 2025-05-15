import styles from "./GameCard.module.css";

const GameCard = ({ game, onRemove }) => {
  return (
    <div className={styles.gameCard}>
      <img src={game.coverImage} alt={`Capa de ${game.title}`} />
      <div className={styles.gameInfo}>
        <h2>{game.title}</h2>
        <p className={styles.year}>{game.releaseYear}</p>
        <p className={styles.description}>{game.description}</p>
        <button
          className={styles.removeButton}
          onClick={() => onRemove(game.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default GameCard;