import './Paragraph.css';

function Paragraph({text, className}) {
	const cl = 'paragraph' + (className ? ' ' + className : '');

	return (
		<>
			<p className={cl}>{text}</p>
		</>
	);
}

export default Paragraph;
