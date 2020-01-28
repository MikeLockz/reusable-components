import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs/react";
import { Button } from "./Button";

storiesOf("Button", module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true
    }
  })
  .addWithJSX("with Background", () => (
    <Button disabled={boolean("disabled", false)}>
      {text("text", "I am a button")}
    </Button>
  ));
