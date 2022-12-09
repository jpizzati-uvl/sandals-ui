import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Base } from "../base";
import { Button } from "./button";

export default {
  title: "Base/Button",
  parameters: {},
  component: Button,
} as ComponentMeta<typeof Button>;

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
buttonA.args = {
  label: "Button A",
  className:
    "xs:p-15 xs:mt-50 ff-weddings-rg fc-white xs:fs-25 sm:fs-45 bg-teal-gt",
  onClick: () => alert("You clicked me!"),
};

export const buttonB = Template.bind({});
buttonB.args = {
  label: "Button B",
  className: "xs:p-15 xs:mt-50 ff-base-eb fc-white xs:fs-25 sm:fs-45 bg-black",
  onClick: () => alert("You clicked me!"),
};
