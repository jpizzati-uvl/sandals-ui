import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from './image';
import Wrapper from '../../.storybook/wrapper';

export default {
  title: 'Components/Image',
  parameters: {},
  component: Image,
} as ComponentMeta<typeof Image>;

const TemplateA: ComponentStory<typeof Image> = args => (
  <Wrapper className="mx-auto mt-[5rem] w-8/12">
    <Image {...args} />
  </Wrapper>
);

export const Default = TemplateA.bind({});
Default.args = {
  alt: 'Random image',
  src: 'https://picsum.photos/800/800',
};

export const Fallback = TemplateA.bind({});
Fallback.args = {
  alt: 'Fallback image',
  src: 'https://picsum.photos/bad-url',
  fallback:
    'https://cdn.sandals.com/sandals/v13/images/EN/resorts/global/coming-soon/background.jpg',
};

const TemplateB: ComponentStory<typeof Image> = args => (
  <Wrapper className="relative mx-auto mt-[5rem] h-[50rem] w-full sm:w-8/12">
    <Image {...args} />
  </Wrapper>
);

export const Responsive = TemplateB.bind({});
Responsive.args = {
  alt: 'Responsive image',
  src: 'https://picsum.photos/800/800',
  responsive: true,
};
