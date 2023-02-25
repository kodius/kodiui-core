import "@kodiui/ui/style.css";
import { Box, Stack } from "@kodiui/ui";
import { theme } from "./contract.css";

function App() {
  return (
    <div className={theme}>
      <Box
        p={"lg"}
        background={"blue900"}
        color={"blue200"}
        // borderRadius={"md"}
        boxShadow={"lg"}
      >
        <Stack>
          <div>test</div>
          <div>test</div>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
