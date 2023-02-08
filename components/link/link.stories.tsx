import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './link';
import Wrapper from '../../.storybook/wrapper';
import { styles as linkStyles } from './link.styles';
import { styles as buttonStyles } from '../button/button.styles';

export default {
  title: 'Components/Link',
  parameters: {},
  component: Link,
} as ComponentMeta<typeof Link>;

const CustomTemplateA: ComponentStory<typeof Link> = args => (
  <Wrapper className="mx-auto mt-[5rem] w-4/12 text-center">
    <Link {...args}>
      <span className={linkStyles.heavy}>
        Link <i className="ic-link" />
      </span>
    </Link>
  </Wrapper>
);

export const CustomA = CustomTemplateA.bind({});
CustomA.args = {
  href: 'https://www.sandals.com',
  target: 'blank',
};

const CustomTemplateB: ComponentStory<typeof Link> = args => (
  <Wrapper className="mx-auto mt-[5rem] w-4/12 text-center">
    <Link {...args}>
      <span className={buttonStyles.filled}>Link</span>
    </Link>
  </Wrapper>
);

export const CustomB = CustomTemplateB.bind({});
CustomB.args = {
  href: '#',
  target: 'self',
  // eslint-disable-next-line no-alert
  onPress: () => alert('Pressed Link'),
};
