import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      text: string;
      text_light: string;
      text_dark: string;
      primary: string;
      secondary: string;
      background: string;
      input_color: string;
      modal_color: string;
    };
    fonts: {
      quicksand_regular: string;
      quicksand_medium: string;
      quicksand_semi_bold: string;
      quicksand_bold: string;
    };
    fontsize: {
      font_twelve: number,
      font_fourteen: number;
      font_sixteen: number;
      font_eighteen: number;
      font_twenty: number;
      font_twenty_four: number;
      font_twenty_six: number;
    };
  }
}
