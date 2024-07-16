import { useState, useRef } from "react";

import ResultModal from "./ResultModal";

export default function TimeChallenge({ title, targetTime }) {
	const timer = useRef();
	const dialog = useRef();

	const [timeRemaining, setTimeRemaing] = useState(targetTime * 1000);

	const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

	if (timeRemaining <= 0) {
		clearInterval(timer.current);
		dialog.current.open();
	}

	function handleStart() {
		timer.current = setInterval(() => {
			setTimeRemaing((prevTimeRemaining) => prevTimeRemaining - 10);
		}, 10);
	}

	function handleStop() {
		clearInterval(timer.current);
		dialog.current.open();
	}

	function handleReset() {
		setTimeRemaing(targetTime * 1000);
	}

	return (
		<>
			<ResultModal
				ref={dialog}
				targetTime={targetTime}
				remainingTime={timeRemaining}
				onReset={handleReset}
			/>
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "i" : "o"}
				</p>
				<p>
					<button onClick={timerIsActive ? handleStop : handleStart}>
						{timerIsActive ? "Ferma" : "Inizia"} Sfida
					</button>
				</p>
				<p className={timerIsActive ? "active" : ""}>
					Cronometro {timerIsActive ? "Attivo" : "Fermo"}
				</p>
			</section>
		</>
	);
}
