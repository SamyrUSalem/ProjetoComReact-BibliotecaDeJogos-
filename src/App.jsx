import GamesCards from "./components/GamesCards"
import FormGames from "./components/FormGames"
import GameCollection from "./hooks/GameCollection";

export default function App() {
  const { games, addGames, removeGame } = GameCollection();

  return (
    <div className="App">
      <h1>Biblioteca de Jogos</h1>
      <FormGames addGame={addGames} />
      <div className="games">
        {/*Estou utilizando uma renderização condicional, caso n tenha nenhum dado(jogo) no array games, será exibido o h2, mas caso possua será adicionando a lista */}
        {games.length > 0 ?
          games.map((game) => (
            <GamesCards key={game.id} title={game.title} img={game.img} onRemove={() => removeGame(game.id)} />
          ))
          : (
            <h2 style={{ margin: "40px auto" }}>Adicione algum jogo!</h2>
          )}

      </div>
    </div>
  )
}