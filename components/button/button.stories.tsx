import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';
import Wrapper from '../../.storybook/wrapper';
import { styles } from './button.styles';

export default {
  title: 'Components/Button',
  parameters: {},
  component: Button,
} as ComponentMeta<typeof Button>;

const TemplateA: ComponentStory<typeof Button> = args => (
  <Wrapper className="mx-auto mt-[5rem] w-4/12">
    <Button {...args}>
      <span className={styles.filled}>Button</span>
    </Button>
  </Wrapper>
);

export const CustomA = TemplateA.bind({});
CustomA.args = {
  type: 'button',
  // eslint-disable-next-line no-alert
  onPress: () => alert('Pressed Button'),
};

const TemplateB: ComponentStory<typeof Button> = args => (
  <Wrapper className="mx-auto mt-[5rem] w-4/12">
    <Button {...args}>
      <span className={styles.outline}>Button</span>
    </Button>
  </Wrapper>
);

export const CustomB = TemplateB.bind({});
CustomB.args = {
  type: 'button',
  // eslint-disable-next-line no-alert
  onPress: () => alert('Pressed Button'),
};
