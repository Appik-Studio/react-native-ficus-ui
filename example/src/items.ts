import { ComponentType } from 'react';
import BoxComponent from './components/Box';
import TextComponent from './components/Text';

type ExampleComponentType = {
  onScreenName: string;
  navigationPath: string;
  component: ComponentType;
};

export const components: ExampleComponentType[] = [
  {
    navigationPath: 'Text',
    onScreenName: 'Text',
    component: TextComponent,
  },
  { navigationPath: 'Box', onScreenName: 'Box', component: BoxComponent },
];