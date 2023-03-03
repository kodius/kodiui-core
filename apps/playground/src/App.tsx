import "@kodiui/ui/style.css";
import { Box, FlexBox } from "@kodiui/ui";

import { theme } from "./contract.css";

function App() {
  return (
    <div className={theme}>
      <Box color={"red700"} background={"red300"} borderRadius={"md"} p={"md"}>
        Box
      </Box>
      <Box padding={"sm"} color={"red300"} borderRadius={"sm"}>
        box
      </Box>
      <FlexBox justifyContent={"flex-start"} flexDirection={"row-reverse"}>
        <Box background={"red300"}>1</Box>
        <Box background={"red300"}>2</Box>
      </FlexBox>
    </div>
  );
}

export default App;
