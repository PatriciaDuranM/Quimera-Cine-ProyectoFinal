import { COLORS } from './Colors';

export const AGE_SIZES = {
	S_MOV: {
		width: '35px',
		height: '27px',
		fontSize: '1rem'
	},
	M_MOV: {
		width: '35px',
		height: '32px',
		fontSize: '2rem'
	},
	L_MOV: {
		width: 'fit content',
		height: '44px',
		fontSize: '20px'
	}
};

export const AGE_TAGS = {
	A: {
		text: 'A',
		color: COLORS.pastelGreen,
		size: AGE_SIZES
	},
	7: {
		text: '+7',
		color: COLORS.pastelBlue,
		size: AGE_SIZES
	},
	12: {
		text: '+12',
		color: COLORS.pastelOrange,
		size: AGE_SIZES
	},
	16: {
		text: '+16',
		color: COLORS.pastelViolet,
		size: AGE_SIZES
	},
	18: {
		text: '+18',
		color: COLORS.pastelPink,
		size: AGE_SIZES
	}
};

export const GENRE_SIZES = {
	S_MOV: {
		height: '27px',
		fontSize: '14px'
	},
	M_MOV: {
		height: '32px',
		fontSize: '18px'
	},
	L_MOV: {
		height: '44px',
		fontSize: '20px'
	}
};

export const GENRE_TAGS = {
	action: {
		text: 'Acción',
		color: COLORS.pastelPink,
		size: GENRE_SIZES
	},
	adventure: {
		text: 'Aventura',
		color: COLORS.pastelOrange,
		size: GENRE_SIZES
	},
	animation: {
		text: 'Animación',
		color: COLORS.pastelBlue,
		size: GENRE_SIZES
	},
	comedy: {
		text: 'Comedia',
		color: COLORS.pastelBlue,
		size: GENRE_SIZES
	},
	crime: {
		text: 'Crimen',
		color: COLORS.pastelViolet,
		size: GENRE_SIZES
	},
	documentary: {
		text: 'Documental',
		color: COLORS.pastelGreen,
		size: GENRE_SIZES
	},
	drama: {
		text: 'Drama',
		color: COLORS.pastelViolet,
		size: GENRE_SIZES
	},
	family: {
		text: 'Familiar',
		color: COLORS.pastelOrange,
		size: GENRE_SIZES
	},
	fantasy: {
		text: 'Fantasía',
		color: COLORS.pastelGreen,
		size: GENRE_SIZES
	},
	history: {
		text: 'Historia',
		color: COLORS.pastelOrange,
		size: GENRE_SIZES
	},
	horror: {
		text: 'Terror',
		color: COLORS.pastelViolet,
		size: GENRE_SIZES
	},
	music: {
		text: 'Música',
		color: COLORS.pastelOrange,
		size: GENRE_SIZES
	},
	mystery: {
		text: 'Misterio',
		color: COLORS.pastelBlue,
		size: GENRE_SIZES
	},
	romance: {
		text: 'Romance',
		color: COLORS.pastelPink,
		size: GENRE_SIZES
	},
	'sci-fi': {
		text: 'Ciencia ficción',
		color: COLORS.pastelGreen,
		size: GENRE_SIZES
	},
	'tv-movie': {
		text: 'Película de TV',
		color: COLORS.pastelGreen,
		size: GENRE_SIZES
	},
	thriller: {
		text: 'Suspense',
		color: COLORS.pastelOrange,
		size: GENRE_SIZES
	},
	war: {
		text: 'Bélica',
		color: COLORS.pastelOrange,
		size: GENRE_SIZES
	},
	western: {
		text: 'Western',
		color: COLORS.pastelBrown,
		size: GENRE_SIZES
	}
};
