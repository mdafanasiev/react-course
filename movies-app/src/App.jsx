import './App.css';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
	const searchTitle = 'Поиск';
	const actionName = 'Искать';
	const text = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
	return (
		<>
			<Header title={searchTitle} />
			<Button actionName={actionName} />
			<Paragraph text={text} className='large-par'/>
		</>
	);
}

export default App;
