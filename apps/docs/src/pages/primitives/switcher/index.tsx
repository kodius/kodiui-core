import { Doc } from "@/features/documentation/Doc";
import { Switcher } from "@kodiui/ui";

const SwitcherPage = () => {
  return (
    <Doc>
      <Doc.Title>Switcher</Doc.Title>

      <Doc.Block
        canPlay
        subTitle="Lays out children equally inline until it is forced to wrap, then lays
        out children vertically"
        exampleWithCode={
          <Switcher>
            <Doc.Placeholder width={"2"} />
            <Doc.Placeholder width={"2"} />
          </Switcher>
        }
      />
    </Doc>
  );
};

export default SwitcherPage;
