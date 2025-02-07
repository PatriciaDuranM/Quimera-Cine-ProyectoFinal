import { COLORS } from './Colors';
import { FONT_WEIGHT } from './FontsStyles';

const AGE_SIZES = {
	S_MOV: {
		width: '35px',
		height: '27px',
		fontSize: '14px',
		fontWeight: FONT_WEIGHT.regular
	},
	M_MOV: {
		width: '35px',
		height: '32px',
		fontSize: '18px',
		fontWeight: FONT_WEIGHT.medium
	},
	L_MOV: {
		width: '40px',
		height: '40px',
		fontSize: '18px',
		fontWeight: FONT_WEIGHT.regular
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
		color: COLORS.pastelPink,
		size: AGE_SIZES
	}
};

const GENRE_SIZES = {
	S_MOV: {
		height: '27px',
		fontSize: '14px',
		fontWeight: FONT_WEIGHT.regular
	},
	M_MOV: {
		height: '32px',
		fontSize: '18px',
		fontWeight: FONT_WEIGHT.medium
	},
	L_MOV: {
		height: '40px',
		fontSize: '18px',
		fontWeight: FONT_WEIGHT.regular
	}
};

export const GENRE_TAGS = {
	accion: {
		text: 'Acción',
		color: COLORS.pastelPink,
		size: GENRE_SIZES
	},
	animacion: {
		text: 'Animación',
		color: COLORS.pastelBlue,
		size: GENRE_SIZES
	},
	biografia: {
		text: 'Biografía',
		color: COLORS.pastelGreen,
		size: GENRE_SIZES
	},
	comedia: {
		text: 'Comedia',
		color: COLORS.pastelOrange,
		size: GENRE_SIZES
	},
	drama: {
		text: 'Drama',
		color: COLORS.pastelViolet,
		size: GENRE_SIZES
	},
	familiar: {
		text: 'Familiar',
		color: COLORS.pastelBlue,
		size: GENRE_SIZES
	},
	romance: {
		text: 'Romance',
		color: COLORS.pastelPink,
		size: GENRE_SIZES
	},
	scifi: {
		text: 'Sci-fi',
		color: COLORS.pastelViolet,
		size: GENRE_SIZES
	},
	concierto: {
		text: 'Concierto',
		color: COLORS.pastelGreen,
		size: GENRE_SIZES
	},
	misterio: {
		text: 'Misterio',
		color: COLORS.pastelBlue,
		size: GENRE_SIZES
	},
	thriller: {
		text: 'Thriller',
		color: COLORS.pastelPink,
		size: GENRE_SIZES
	},
	musical: {
		text: 'Musical',
		color: COLORS.pastelOrange,
		size: GENRE_SIZES
	},
	terror: {
		text: 'Terror',
		color: COLORS.pastelViolet,
		size: GENRE_SIZES
	},
	documental: {
		text: 'Documental',
		color: COLORS.pastelGreen,
		size: GENRE_SIZES
	}
};
