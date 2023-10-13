import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

type ButtonProps = ChakraButtonProps & {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

export function Button({ children, variant = 'primary' }: ButtonProps) {
  return <ChakraButton variant={variant}>{children}</ChakraButton>;
}
