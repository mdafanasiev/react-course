import './Head.css';
import Header from '../../Header/Header';
import Paragraph from '../../Paragraph/Paragraph';
import Search from '../../Search/Search';

function Head() {
	const searchTitle = 'Поиск';
	const searchText =
    'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';

	return (
		<div className="head">
			<div className="head-left">
				<div className="head-left-main">
					<Header title={searchTitle} />
					<Paragraph text={searchText} className="" />
				</div>
				<Search />
			</div>
		</div>
	);
}

export default Head;
