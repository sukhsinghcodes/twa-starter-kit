import { colors } from '../theme';
import { Button } from './Button';
import Twa from '@twa-dev/sdk';
import { MainButton as TwaMainButton } from '@twa-dev/sdk/react';

interface MainButtonProps {
  disabled?: boolean;
  progress?: boolean;
  color?: string;
  textColor?: string;
  onClick: VoidFunction;
  text: string;
}

export function MainButton(props: MainButtonProps) {
  // if not webapp
  if (!Twa.initData) {
    return (
      <Button
        style={{
          pointerEvents: props.disabled ? 'none' : 'auto',
        }}
        isLoading={props.progress}
        onClick={props.onClick}
        disabled={props.disabled}
        variant="primary"
      >
        {props.text?.toUpperCase()}
      </Button>
    );
  }
  return (
    <TwaMainButton
      {...props}
      color={props.disabled || props.progress ? colors.button_disabed_color : colors.button_color}
      text={props.text?.toUpperCase()}
    />
  );
}
