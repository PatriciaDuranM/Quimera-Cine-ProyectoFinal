import MovieCardList from '../../components/MovieCardList/MovieCardList';
import Tag from '../../components/tags/Tags';
import { AGE_TAGS, GENRE_TAGS } from '../../styles/tags';

const Cartelera = () => {
	return (
		<>
			<MovieCardList />
			<Tag
				type='age'
				size={AGE_TAGS[16].size.S_MOV}
				values={AGE_TAGS[16]}
			></Tag>
			<Tag
				type='genre'
				size={GENRE_TAGS.biografia.size.M_MOV}
				values={GENRE_TAGS.biografia}
			></Tag>
		</>
	);
};

export default Cartelera;
