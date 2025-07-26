import './Input.css';

function Input({ type, placeHolder, icon}) {
	if (icon === undefined) {
		return (
			<div className="input-wrapper">
				<input type={type} placeholder={placeHolder} />
			</div>
		);
	}

	return (
		<div class="input-wrapper input-with-icon">
			<img src={icon.src} alt={icon.alt} />
			<input type={type} placeholder={placeHolder} />
		</div>
	);
}

export default Input;
