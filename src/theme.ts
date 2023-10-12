import { StyleFunctionProps, ThemeConfig, defineStyleConfig, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import Twa from '@twa-dev/sdk';

// Telegram theme colours as of 09/10/2023
export const tgColors = {
  dark: {
    bg_color: '#18222d',
    button_color: '#2ea6ff',
    button_text_color: '#ffffff',
    hint_color: '#b1c3d5',
    link_color: '#62bcf9',
    secondary_bg_color: '#131415',
    text_color: '#ffffff',
  },

  light: {
    bg_color: '#ffffff',
    button_color: '#2481cc',
    button_text_color: '#ffffff',
    hint_color: '#999999',
    link_color: '#2481cc',
    secondary_bg_color: '#efeff3',
    text_color: '#000000',
  },
};

console.log('color mode', Twa.colorScheme);

const config: ThemeConfig = {
  initialColorMode: Twa.colorScheme,
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      'html, body': {
        color:
          Twa.themeParams.text_color ||
          mode(tgColors.light.text_color, tgColors.dark.text_color)(props),
        backgroundColor:
          Twa.themeParams.secondary_bg_color ||
          mode(tgColors.light.secondary_bg_color, tgColors.dark.secondary_bg_color)(props),
      },
      a: {
        color:
          Twa.themeParams.link_color ||
          mode(tgColors.light.link_color, tgColors.dark.link_color)(props),
      },
    }),
  },
  components: {
    Card: defineStyleConfig({
      baseStyle: {
        backgroundColor: (props) =>
          Twa.themeParams.bg_color || mode(tgColors.light.bg_color, tgColors.dark.bg_color)(props),
      },
    }),
    Text: defineStyleConfig({
      variants: {
        hint: {
          color: (props) =>
            Twa.themeParams.hint_color ||
            mode(tgColors.light.hint_color, tgColors.dark.hint_color)(props),
          fontSize: '0.875rem',
        },
      },
    }),
  },
});
