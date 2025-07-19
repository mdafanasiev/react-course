import './Button.css';

function Button	({ actionName }) {
	return (
		<>
			<button className="button">{actionName}</button>
		</>
	);
}

export default Button;
