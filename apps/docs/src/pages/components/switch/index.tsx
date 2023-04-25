import * as React from "react";

import { Switch } from "@/components/input/Switch/Switch";
import { Doc } from "@/features/documentation";

const SwitchPage = () => {
  const [isChecked, toggleSwitch] = React.useState(false);
  return (
    <Doc>
      <Doc.Subtitle>Switch</Doc.Subtitle>
      <Doc.Example>
        <Switch
          checked={isChecked}
          onCheckedChange={(checked) => toggleSwitch(checked)}
        />
      </Doc.Example>
    </Doc>
  );
};

export default SwitchPage;
