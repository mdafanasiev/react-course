import './Paragraph.css';

function Paragraph({text, className}) {
	const cl = 'paragraph' + (className ? ' ' + className : '');

	return (
		<div className={cl}>{text}</div>
	);
}

export default Paragraph;
