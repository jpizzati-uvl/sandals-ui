import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  title: 'Base/Button',
  parameters: {},
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="container">
      <div className="row center-xs">
        <div className="xs-6">
          <Button
            {...args}
            label={clicked ? 'click again' : 'click'}
            onClick={() => setClicked(prevState => !prevState)}
          />
        </div>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  theme: 'default',
  size: 'xs',
};
