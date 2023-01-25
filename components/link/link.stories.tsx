import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './link';

export default {
  title: 'Components/Link',
  parameters: {},
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => (
  <div className="container">
    <div className="row center-xs">
      <div className="xs-6 xs:mt-50">
        <Link {...args} />
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
const defaultLabel = (
  <>
    Link
    <i className="ic-link" />
  </>
);

Default.args = {
  size: 'xs',
  label: defaultLabel,
  href: 'https://www.sandals.com',
  target: '_blank',
};

export const Custom = Template.bind({});

const customLabel = (
  <>
    View More
    <i className="ic-link fc-blue-df" />
  </>
);

Custom.args = {
  size: 'xs',
  label: customLabel,
  href: 'https://www.sandals.com',
  target: '_blank',
};
