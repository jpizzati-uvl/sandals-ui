import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './link';

export default {
  title: 'Base/Link',
  parameters: {},
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="container">
      <div className="row center-xs">
        <div className="xs-5">
          <Link
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
  size: 'xs',
};
