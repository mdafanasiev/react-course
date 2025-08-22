import styles from './Paragraph.module.css';

function Paragraph({text, className}) {
	const cl = styles.paragraph + (className ? ' ' + className : '');

	return (
		<div className={cl}>{text}</div>
	);
}

export default Paragraph;
