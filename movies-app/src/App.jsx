import './App.css';
import Head from './components/Layout/Head/Head';
import Body from './components/Layout/Body/Body';
import UpperBody from './components/Layout/UpperBody/UpperBody';
import Search from './components/Search/Search';

function App() {

	return (
		<>
			<Head />
			<Body>
				<UpperBody>
					<Search />
				</UpperBody>
			</Body>
		</>
	);
}

export default App;

