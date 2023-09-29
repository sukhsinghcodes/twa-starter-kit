import { Theme, defineStyleConfig, extendTheme } from '@chakra-ui/react';
import Twa from '@twa-dev/sdk';

const Card = defineStyleConfig({
  baseStyle: {
    borderRadius: 'xl',
  },
});

export const theme: Partial<Theme> = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: Twa.themeParams.text_color,
        backgroundColor: Twa.themeParams.secondary_bg_color,
      },
      '*': {
        color: Twa.themeParams.text_color,
      },
      a: {
        color: Twa.themeParams.link_color,
      },
    },
  },
  components: {
    Card,
  },
});
