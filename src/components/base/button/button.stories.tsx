import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Base from "../base";
import { Button } from "./button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Base/Button",
  parameters: {
    docs: {
      description: {
        component: "Primary UI component for user interaction",
      },
    },
  },
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Base>
    <div className="container">
      <div className="row center-xs">
        <div className="xs-12">
          <Button {...args} />
        </div>
      </div>
    </div>
  </Base>
);

export const buttonA = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
buttonA.args = {
  label: "Button A",
  className: "shades-white shades-black-bg",
  onClick: () => alert("You clicked me!"),
};

export const buttonB = Template.bind({});
buttonB.args = {
  label: "Button B",
  onClick: () => alert("You clicked me!"),
};
