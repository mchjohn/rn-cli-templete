import { RFValue } from 'react-native-responsive-fontsize';

export const darkTheme = {
  title: 'dark',

  colors: {
    text_dark: '#080B0B',
    text_light: '#ACACAC',
    text: '#848585',
    primary: '#FF0000',
    secondary: '#0086F2',
    background: '#1F2222',
    input_color: '#F0F0F0',
    modal_color: '#363636',
  },
  fonts: {
    quicksand_regular: 'Quicksand-Regular',
    quicksand_medium: 'Quicksand-Medium',
    quicksand_semi_bold: 'Quicksand-SemiBold',
    quicksand_bold: 'Quicksand-Bold',
  },
  fontsize: {
    font_twelve: RFValue(12),
    font_fourteen: RFValue(14),
    font_sixteen: RFValue(16),
    font_eighteen: RFValue(18),
    font_twenty: RFValue(20),
    font_twenty_four: RFValue(24),
    font_twenty_six: RFValue(26),
  },
};
