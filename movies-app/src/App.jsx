import './App.css';
import Head from './components/Layout/Head/Head';
import Body from './components/Layout/Body/Body';
import UpperBody from './components/Layout/UpperBody/UpperBody';
import Search from './components/Search/Search';
import MainContent from './components/Layout/MainContent/MainContent';
import MoviesCardList from './components/MoviesCardList/MoviesCardList';
import MovieCard from './components/MovieCard/MovieCard';
import Login from './components/Login/Login';

function App() {

	const MoviesCardsData = [
		{
			id: 1,
			title: 'Black widow',
			filename: 'BlackWidow.png',
			inFavourites: false,
			rating: 324
		},
		{ 
			id: 2, 
			title: 'Friends',
			filename: 'Friends.png', 
			inFavourites: false,
			rating: 124 
		},
		{ 
			id: 3, 
			title: 'How I Met Your Mother',
			filename: 'HowiMetYourMother.png', 
			inFavourites: false,
			rating: 235 
		},
		{ 
			id: 4, 
			title: 'Loki',
			filename: 'Loki.png', 
			inFavourites: false,
			rating: 123 
		},
		{ 
			id: 5, 
			title: 'Money Heist',
			filename: 'MoneyHeist.png', 
			inFavourites: true,
			rating: 8125
		},
		{ 
			id: 6, 
			title: 'Shang Chi',
			filename: 'ShangChi.png', 
			inFavourites: false,
			rating: 123
		},
		{ 
			id: 7, 
			title: 'The Big Bang Theory',
			filename: 'TheBigBangTheory.png', 
			inFavourites: false,
			rating: 12 
		},
		{ 
			id: 8, 
			title: 'Two And A Half Man',
			filename: 'TwoAndAHalfMan.png', 
			inFavourites: false,
			rating: 456 
		}	
	  ];

	return (
		<>
			<Head />
			<Body>
				<UpperBody>
					<Search />
				</UpperBody>
				<MainContent>
					<MoviesCardList>
						{MoviesCardsData.map((cardData) => (
							<MovieCard key={cardData.id} cardData={cardData} />
						))}
					</MoviesCardList>
				</MainContent>
			</Body>
			<Login />
		</>
	);
}

export default App;

