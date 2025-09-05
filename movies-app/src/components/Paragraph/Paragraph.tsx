import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';

function Paragraph({text, className}: ParagraphProps) {
	const cl = styles.paragraph + (className ? ' ' + className : '');

	return (
		<div className={cl}>{text}</div>
	);
}

export default Paragraph;
