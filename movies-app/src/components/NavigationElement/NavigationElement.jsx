import './NavigationElement.css';

function NavigationElement({ text }) {
	return (
		<>
			<li>
				<a className="nav-element" href="#">
					{text}
				</a>
			</li>
		</>
	);
}

export default NavigationElement;
