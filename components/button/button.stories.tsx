import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  title: 'Components/Button',
  parameters: {},
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <div className="container">
    <div className="row center-xs">
      <div className="xs-6 xs:mt-50">
        <Button {...args} />
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
const defaultLabel = <span>Button</span>;

Default.args = {
  appearance: 'solid',
  label: defaultLabel,
  size: 'xs',
};

export const Custom = Template.bind({});

const customLabel = (
  <span className="fc-blue-df">
    Download
    <i className="ic-download" />
  </span>
);

Custom.args = {
  appearance: 'outline',
  label: customLabel,
  size: 'xs',
};
