// Primary Colors
export const PRIMARY = {
  '13': '#2E60A9',
  '12': '#3A70B9',
  '11': '#3C7CC2',
  '10': '#4A43DD',
  '09': '#4464EB',
  '08': '#524FF7',
  '07': '#6D6DFB',
  '06': '#868BFD',
  '05': '#A8ACFD',
  '04': '#BCBFFF',
  '03': '#E0EAFF',
  '02': '#D8DBFE',
  '01': '#EBEBFF',
} as const;

// Black Colors
export const BLACK = {
  '01': '#1E1E22',
  '02': 'rgba(30, 30, 34, 0.4)',
} as const;

// Red Colors
export const RED = {
  '10': '#5F1111',
  '09': '#7E1616',
  '08': '#A51D1D',
  '07': '#C72323',
  '06': '#DD4040',
  '05': '#E67070',
  '04': '#ED9797',
  '03': '#F4C2C2',
  '02': '#F8D8D8',
  '01': '#FBE9E9',
} as const;

// Orange Colors
export const ORANGE = {
  '10': '#643407',
  '09': '#814309',
  '08': '#B55E0C',
  '07': '#E1740F',
  '06': '#F18C2D',
  '05': '#FAA358',
  '04': '#F7BD88',
  '03': '#FAD5B3',
  '02': '#FCE7D4',
  '01': '#FDF2E7',
} as const;

// Yellow Colors
export const YELLOW = {
  '10': '#5C4805',
  '09': '#795E06',
  '08': '#A07D08',
  '07': '#CB9F08',
  '06': '#EDB90C',
  '05': '#F5C938',
  '04': '#F8D973',
  '03': '#FAE6A3',
  '02': '#FCF0CA',
  '01': '#FDF7E2',
} as const;

// Green Colors
export const GREEN = {
  '10': '#174033',
  '09': '#205A49',
  '08': '#2B7861',
  '07': '#359276',
  '06': '#40B08E',
  '05': '#5EC5A6',
  '04': '#80D1B9',
  '03': '#B4E4D6',
  '02': '#D6F0E8',
  '01': '#ECF8F5',
} as const;

// Gray Colors
export const GRAY = {
  '13': '#15181F',
  '12': '#2B2D39',
  '11': '#3B3C54',
  '10': '#4B556C',
  '09': '#5C677F',
  '08': '#717D98',
  '07': '#959EB2',
  '06': '#A9B1C1',
  '05': '#BEC4D0',
  '04': '#D3D7DF',
  '03': '#E6E6EC',
  '02': '#F0F2F4',
  '01': '#F5FAFB',
} as const;

// Sky Colors
export const SKY = {
  '10': '#003D42',
  '09': '#006B75',
  '08': '#009AA8',
  '07': '#00C9D8',
  '06': '#0FEAFF',
  '05': '#44FFFF',
  '04': '#85F5FF',
  '03': '#B8FFFF',
  '02': '#E0FCFF',
  '01': '#F0FFFF',
} as const;

// White Opacity Colors
export const WHITE_OP = {
  '06': 'rgba(255,255,255,1)',
  '05': 'rgba(255,255,255,0.85)',
  '04': 'rgba(255,255,255,0.7)',
  '03': 'rgba(255,255,255,0.4)',
  '02': 'rgba(255,255,255,0.2)',
  '01': 'rgba(255,255,255,0.1)',
} as const;

// Dim Colors
export const DIM = {
  '01': 'rgba(240,242,244,0.7)',
} as const;

// Semantic Colors
export const SEMANTIC = {
  text: {
    primary: GRAY['13'],
    secondary: GRAY['09'],
    tertiary: GRAY['07'],
    white: WHITE_OP['06'],
  },
  background: {
    primary: WHITE_OP['06'],
    secondary: GRAY['02'],
    tertiary: GRAY['01'],
  },
  border: {
    default: GRAY['03'],
    strong: GRAY['04'],
  },
  dim: DIM['01'],
} as const;
