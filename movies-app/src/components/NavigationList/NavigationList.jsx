import './NavigationList.css';

function NavigationList({ children }) {
	return (
		<ul className='nav-list'>
			{children}
		</ul>
	);
}

export default NavigationList;
