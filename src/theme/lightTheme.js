import { DefaultTheme } from '@react-navigation/native';

/**
 * Colors containing for light theme
 */
const WHITE = '#fff';
const GRAY_100 = '#f9f9f9';
const GRAY_200 = '#e0e0e0';
const GRAY_300 = '#ced2d9';
const GRAY_400 = '#979da0';
const GRAY_500 = '#6d787e';
const GRAY_600 = '#354052';
const BLACK = '#000';
const PRIMARY_COLOR = '#2196F3';
const ERROR_COLOR = '#ff190c';
export default {
  colors: {
    white: WHITE,
    gray100: GRAY_100,
    gray200: GRAY_200,
    gray300: GRAY_300,
    gray400: GRAY_400,
    gray500: GRAY_500,
    gray600: GRAY_600,
    black: BLACK,
    transparent: 'transparent',
    surface: WHITE,
    border: GRAY_300,
    disabled: '#E3E6E8',
    disabledDark: '#99A1A8',
    icon: GRAY_500,
    primary: PRIMARY_COLOR,
    success: '#52c41a',
    error: ERROR_COLOR,
    warning: '#ffbb33',
    info: '#33b5e5',
  },
  // ===========================================================
  // ============ GLOBAL React Navigation Theme ================
  // ===========================================================
  navigation: {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: PRIMARY_COLOR,
      background: GRAY_100,
      text: WHITE,
      card: PRIMARY_COLOR,
      border: GRAY_300,
      notification: ERROR_COLOR,
    },
  },
  // ===========================================================
  // ================ Component Specific Style =================
  // ===========================================================
  appbar: {
    statusBarColor: '#135E99',
  },
  bottomBar: {
    activeTintColor: PRIMARY_COLOR,
    inactiveTintColor: GRAY_400,
    activeBackgroundColor: WHITE,
    inactiveBackgroundColor: WHITE,
  },
};
