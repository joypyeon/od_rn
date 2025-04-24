import {TextStyle} from 'react-native';

// 색상 상수
export const colors = {
  BLACK: '#1E1E22',
  GREY: '#727272',
  LIGHT_GREY: '#666666',
  WHITE: 'white',
  BACKGROUND_GREY: '#F2F4F6',
} as const;

// 폰트 크기 상수
export const sizes = {
  HEADING: 18,
  SUBTITLE: 16,
  BODY: 14,
  SMALL: 13,
} as const;

// 폰트 웨이트 상수
export const weights = {
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
} as const;

// 기본 텍스트 스타일
const baseTextStyle = {
  letterSpacing: -0.2,
} as const;

// 자주 사용되는 텍스트 스타일 조합
export const textStyles = {
  // Heading 스타일
  heading32: {
    ...baseTextStyle,
    fontSize: 32,
    lineHeight: 44,
    fontWeight: weights.SEMI_BOLD,
  },
  heading24: {
    ...baseTextStyle,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: weights.SEMI_BOLD,
  },
  heading20: {
    ...baseTextStyle,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: weights.BOLD,
  },
  heading18: {
    ...baseTextStyle,
    fontSize: 18,
    lineHeight: 26,
    fontWeight: weights.SEMI_BOLD,
  },

  // SubTitle 스타일
  subtitle16: {
    ...baseTextStyle,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: weights.SEMI_BOLD,
  },
  subtitle14: {
    ...baseTextStyle,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: weights.SEMI_BOLD,
  },

  // Label 스타일
  label14: {
    ...baseTextStyle,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: weights.MEDIUM,
  },
  label13: {
    ...baseTextStyle,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: weights.MEDIUM,
  },

  // Body 스타일
  body16: {
    ...baseTextStyle,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: weights.REGULAR,
  },
  body14: {
    ...baseTextStyle,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: weights.REGULAR,
  },
  body13: {
    ...baseTextStyle,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: weights.REGULAR,
  },

  // Caption 스타일
  caption12: {
    ...baseTextStyle,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: weights.REGULAR,
  },

  // Overline 스타일
  overline10: {
    ...baseTextStyle,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: weights.SEMI_BOLD,
  },
} as const;
