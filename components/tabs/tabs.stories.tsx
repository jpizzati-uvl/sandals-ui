import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from './tabs';

export default {
  title: 'Components/Tabs',
  parameters: {},
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = args => (
  <div style={{ marginTop: '5rem' }}>
    <Tabs {...args}>
      <div
        data-contentid="0"
        className="row center-xs middle-xs"
        style={{ height: '50rem' }}
      >
        <div className="xs-12">Content for Tab 1</div>
      </div>

      <div
        data-contentid="1"
        className="row center-xs middle-xs"
        style={{ height: '50rem' }}
      >
        <div className="xs-12">Content for Tab 2</div>
      </div>
    </Tabs>
  </div>
);

const defaultStyle =
  'xs:py-8 sm:py-10 lg:py-20 xs:fs-12 sm:fs-16 uppercase block bs-dashed bc-gray-c4';
// const selectedStyle = 'bw-y-1 bw-l-1 bw-r-1';
// const unselectedStyle = 'bw-b-1';

export const Default = Template.bind({});
Default.args = {
  tabs: [
    <span
      key="before"
      className="bw-b-1 bs-solid bc-gray-c4 fg-1 h-100 block"
    />,
    <span key="tab-0" data-tabid="0" className={`${defaultStyle}`}>
      Tab One
    </span>,
    <span key="tab-1" data-tabid="1" className={`${defaultStyle}`}>
      Tab Two
    </span>,
    <span
      key="after"
      className="bw-b-1 bs-solid bc-gray-c4 fg-1 h-100 block"
    />,
  ],
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  tabs: [
    <span key="tab-one" className="xs:py-8">
      Tab One
    </span>,
    <span key="tab-two" className="xs:py-8">
      Tab Two
    </span>,
  ],
  customWidth: 15,
};
