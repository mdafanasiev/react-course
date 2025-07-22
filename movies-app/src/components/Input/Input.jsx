import './Input.css';

function Input({ type, placeHolder}) {
	return (
		<>
			<input className='input' type={type} placeholder={placeHolder} />
		</>
	);
}

export default Input;
