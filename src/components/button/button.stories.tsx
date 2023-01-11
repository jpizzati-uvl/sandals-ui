import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import loadable from '@loadable/component';

const Button = loadable(() => import('./'));

export default {
  title: 'Base/Button',
  parameters: {},
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <div className="container">
    <div className="row center-xs">
      <div className="xs-12">
        <Button {...args} />
      </div>
    </div>
  </div>
);

export const buttonXS = Template.bind({});
buttonXS.args = {
  label: 'Button XS',
  size: 'xs',
  onClick: () => console.log('You clicked on Default Button XS'),
};

export const buttonSM = Template.bind({});
buttonSM.args = {
  label: 'Button SM',
  size: 'sm',
  onClick: () => console.log('You clicked on Default Button SM'),
};

export const buttonLG = Template.bind({});
buttonLG.args = {
  label: 'Button LG',
  size: 'lg',
  onClick: () => console.log('You clicked on Default Button LG'),
};
