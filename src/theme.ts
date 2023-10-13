import { StyleFunctionProps, ThemeConfig, defineStyleConfig, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import Twa from '@twa-dev/sdk';
import { adjustBrightness } from './utils';

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

export const colors = {
  bg_color: Twa.themeParams.bg_color || tgColors.light.bg_color,
  button_color: Twa.themeParams.button_color || tgColors.light.button_color,
  button_text_color: Twa.themeParams.button_text_color || tgColors.light.button_text_color,
  hint_color: Twa.themeParams.hint_color || tgColors.light.hint_color,
  link_color: Twa.themeParams.link_color || tgColors.light.link_color,
  secondary_bg_color: Twa.themeParams.secondary_bg_color || tgColors.light.secondary_bg_color,
  text_color: Twa.themeParams.text_color || tgColors.light.text_color,
};

console.log('color mode', Twa.colorScheme);

const config: ThemeConfig = {
  initialColorMode: Twa.colorScheme,
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
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
    Heading: defineStyleConfig({
      variants: {
        bodyTitle: {
          fontSize: '1rem',
          fontWeight: 'medium',
        },
      },
    }),
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
    Button: defineStyleConfig({
      defaultProps: {
        size: 'lg',
      },
      baseStyle: {
        width: '100%',
        borderRadius: '0.875rem',
      },
      variants: {
        primary: (props) => ({
          backgroundColor:
            Twa.themeParams.button_color ||
            mode(tgColors.light.button_color, tgColors.dark.button_color)(props),
          color:
            Twa.themeParams.button_text_color ||
            mode(tgColors.light.button_text_color, tgColors.dark.button_text_color)(props),
          _hover: {
            backgroundColor: adjustBrightness(
              Twa.themeParams.button_color ||
                mode(tgColors.light.button_color, tgColors.dark.button_color)(props),
              -0.07
            ),
          },
          fontSize: '1rem',
        }),
        secondary: (props) => ({
          backgroundColor: 'transparent',
          fontSize: '1rem',
          color:
            Twa.themeParams.button_color ||
            mode(tgColors.light.button_color, tgColors.dark.button_color)(props),
          _hover: {
            color: adjustBrightness(
              Twa.themeParams.button_color ||
                mode(tgColors.light.button_color, tgColors.dark.button_color)(props),
              -0.1
            ),
          },
        }),
        icon: (props) => ({
          padding: '0.5rem',
          width: 'auto',
          height: 'auto',
          fontSize: '0.875rem',
          color:
            Twa.themeParams.button_color ||
            mode(tgColors.light.button_color, tgColors.dark.button_color)(props),
          _hover: {
            color: adjustBrightness(
              Twa.themeParams.button_color ||
                mode(tgColors.light.button_color, tgColors.dark.button_color)(props),
              -0.1
            ),
          },
        }),
      },
    }),
  },
});
