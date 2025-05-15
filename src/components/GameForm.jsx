import { useState, useEffect } from "react";
import styles from "./GameForm.module.css";

const GameForm = ({ onAdd, initialGames, currentGames }) => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [cover, setCover] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const game = initialGames.find((g) => g.title === selectedTitle);
    if (game) {
      setCover(game.coverImage);
      setError("");
    } else {
      setCover("");
    }
  }, [selectedTitle, initialGames]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const game = initialGames.find((g) => g.title === selectedTitle);
    if (!game) {
      setError("Por favor, selecione um título válido.");
      return;
    }

    const result = onAdd({
      title: game.title,
      cover: game.coverImage,
      releaseYear: game.releaseYear,
      description: game.description,
    });

    if (result?.error) {
      setError(result.error);
      return;
    }

    setError("");
    setSelectedTitle("");
  };

  return (
    <form className={styles.gameForm} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Título:
        <select
          className={styles.select}
          value={selectedTitle}
          onChange={(e) => setSelectedTitle(e.target.value)}
        >
          <option value="">-- Selecione um jogo --</option>
          {initialGames.map((game) => (
            <option key={game.id} value={game.title}>
              {game.title}
            </option>
          ))}
        </select>
      </label>
      <label className={styles.label}>
        URL da Capa:
        <input
          type="text"
          value={cover}
          readOnly
          className={styles.input}
        />
      </label>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.submitButton}>
        Adicionar Jogo
      </button>
    </form>
  );
};

export default GameForm;
