import "./GameForm.css";

const GameForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!title || !cover) return;
    onAdd({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form className="game-form" onSubmit={handleSubmit}>
      <label>
        Título:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        URL da Capa:
        <input
          type="text"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
      </label>
      <button type="submit">Adicionar Jogo</button>
    </form>
  );
};

export default GameForm;
