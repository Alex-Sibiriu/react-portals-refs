import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
	{ targetTime, remainingTime, onReset },
	ref
) {
	const dialog = useRef();

	const isLost = remainingTime <= 0;
	const formatterRemainingTime = (remainingTime / 1000).toFixed(2);
	const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog ref={dialog} className="result-modal" onClose={onReset}>
			{isLost ? <h2>Hai Perso!</h2> : <h2>Il tuo punteggio é: {score}</h2>}
			<p>
				Il cronometro era di{" "}
				<strong>
					{targetTime} second{targetTime > 1 ? "i" : "o"}
				</strong>{" "}
			</p>
			{!isLost && (
				<p>
					Hai fermato il cronometro con{" "}
					<strong>{formatterRemainingTime}</strong> secondi rimasti
				</p>
			)}
			<form method="dialog" onSubmit={onReset}>
				<button>Chiudi</button>
			</form>
		</dialog>,
		document.getElementById("modal")
	);
});

export default ResultModal;
