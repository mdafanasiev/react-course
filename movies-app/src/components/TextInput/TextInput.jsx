import './TextInput.css';

function TextInput({ placeHolder }) {
	return (
		<input type="text" className="input-content" placeholder={placeHolder} />
	);
}

export default TextInput;
