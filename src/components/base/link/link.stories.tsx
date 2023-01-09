import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './link';

export default {
  title: 'Base/Link',
  parameters: {},
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => (
  <div className="container">
    <div className="row center-xs">
      <div className="xs-12">
        <Link {...args} />
      </div>
    </div>
  </div>
);

export const linkXS = Template.bind({});
linkXS.args = {
  label: 'Link XS',
  size: 'xs',
  onClick: () => console.log('You clicked on Default Link XS'),
};

export const linkSM = Template.bind({});
linkSM.args = {
  label: 'Link SM',
  size: 'sm',
  onClick: () => console.log('You clicked on Default Link SM'),
};

export const linkLG = Template.bind({});
linkLG.args = {
  label: 'Link LG',
  size: 'lg',
  onClick: () => console.log('You clicked on Default Link LG'),
};
