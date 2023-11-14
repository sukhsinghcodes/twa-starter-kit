import { useEffect } from 'react';
import { setTwaBg } from '../theme';

type StoryWrapperProps = {
  children: React.ReactNode;
  bgColor?: 'bg_color' | 'secondary_bg_color';
};

export function StoryWrapper({ children, bgColor = 'secondary_bg_color' }: StoryWrapperProps) {
  useEffect(() => {
    setTwaBg(bgColor);
  }, [bgColor]);

  return children;
}
