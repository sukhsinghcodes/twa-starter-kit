import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { theme } from './theme.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './ErrorPage.tsx';
import { Root, Settings } from './routes';
import { useEffect } from 'react';
import Twa from '@twa-dev/sdk';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]);

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorMode />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

const ColorMode = () => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode(Twa.colorScheme);
  }, [setColorMode]);

  return <div />;
};
