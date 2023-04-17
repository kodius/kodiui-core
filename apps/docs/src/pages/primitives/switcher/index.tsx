import { Doc } from "@/features/documentation/Doc";
import { Switcher } from "@kodiui/ui";

const SwitcherPage = () => {
  return (
    <Doc>
      <Doc.Title>Switcher</Doc.Title>
      <Doc.Subtitle>
        Lays out children equally inline until it is forced to wrap, then lays
        out children vertically
      </Doc.Subtitle>
      <Doc.Example>
        <Switcher>
          <Doc.Placeholder width={"1/2"} />
          <Doc.Placeholder width={"1/2"} />
        </Switcher>
      </Doc.Example>
    </Doc>
  );
};

export default SwitcherPage;
