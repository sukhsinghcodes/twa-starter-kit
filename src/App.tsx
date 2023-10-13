import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/900.css';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './ErrorPage.tsx';
import { Root, Settings } from './routes';

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
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
