import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { color } from "@storybook/addon-knobs/react";
import { Button } from "./Button";

storiesOf("Button", module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addWithJSX("with Background", () => (
    <Button bg={color("bg color", "salmon")}>I am a button</Button>
  ))
  .addWithJSX("with green gackground", () => (
    <Button bg="green">I am a green button</Button>
  ));
