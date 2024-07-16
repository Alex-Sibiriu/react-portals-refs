import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimeChallenge.jsx";

function App() {
	return (
		<>
			<Player />
			<div id="challenges">
				<TimeChallenge title="Facile" targetTime={1} />
				<TimeChallenge title="Medio" targetTime={5} />
				<TimeChallenge title="Difficile" targetTime={10} />
				<TimeChallenge title="Impossibile" targetTime={15} />
			</div>
		</>
	);
}

export default App;
