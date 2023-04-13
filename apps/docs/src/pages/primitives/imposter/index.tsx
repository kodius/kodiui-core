import { Doc } from "@/features/documentation";
import { Box  } from "@kodiui/ui";

const ImposterPage = () => {
  return (
    <Doc>
      <Doc.Title>Imposter</Doc.Title>
      <Doc.Subtitle>
        Overlapping, or positioning elements 'absolutely', in a semi-sane way.
      </Doc.Subtitle>
      <Doc.Example>
        <Box>
          <Doc.Placeholder />
        </Box>
      </Doc.Example>
    </Doc>
  );
};

export default ImposterPage;
