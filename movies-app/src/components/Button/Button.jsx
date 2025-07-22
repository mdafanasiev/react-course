import './Button.css';

function Button	({ actionName, onClick}) {
	return (
		<>
			<button className="button" onClick={onClick}>
				{actionName}
			</button>
		</>
	);
}

export default Button;
