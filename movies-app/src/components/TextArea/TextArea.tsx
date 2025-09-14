import { ReactNode } from "react";
import styles from "./TextArea.module.css";

function TextArea( {children} : {children: ReactNode}) {
	return( 
		<div className={styles.textarea}>
			{children}
		</div>);
}

export default TextArea;