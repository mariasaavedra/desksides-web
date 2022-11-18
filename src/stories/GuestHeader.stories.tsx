import { ComponentMeta } from '@storybook/react';

import GuestHeader from '../components/GuestHeader/GuestHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Library/GuestHeader',
  component: GuestHeader,
  //  parameters: {
  //     design: {
  //        type: 'figma',
  //        url: 'https://www.figma.com/file/AyWKarq4WhziyvGaUvW7xx/FitTruck'
  //     }
  //  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //     backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof GuestHeader>;