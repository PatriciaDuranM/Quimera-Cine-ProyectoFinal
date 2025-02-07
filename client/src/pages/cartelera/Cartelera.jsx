import MovieCardList from '../../components/MovieCardList/MovieCardList';
import Tag from '../../components/tags/Tags';
import { AGE_TAGS } from '../../styles/tags';

const Cartelera = () => {
	return (
		<>
			<MovieCardList />
			<Tag type='age' values={AGE_TAGS[16]}></Tag>
		</>
	);
};

export default Cartelera;
