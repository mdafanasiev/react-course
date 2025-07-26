import './Favourite.css';

function Favourite({ inFavourites }) {
	
	if (inFavourites) {
		return (
			<div className="favourite">
				<img src={pathToBookmark()} alt="В избранном" />
				<span className="favourite__info favourite__info_active">В избранном</span>
			</div>
		);
	}

	return (
		<div className="favourite">
			<img src={pathToLike()} alt="В избранное" />
			<span className="favourite__info">В избранное</span>
		</div>
	);
}

export default Favourite;

const pathToLike = () => '/icons/like.svg';

const pathToBookmark = () => '/icons/bookmark.svg';