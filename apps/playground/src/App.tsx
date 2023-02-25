import "@kodiui/ui/style.css";
import { Box } from "@kodiui/ui";
import { theme } from "./contract.css";

function App() {
  return (
    <div className={theme}>
      <Box
        p={"lg"}
        background={"blue900"}
        color={"blue200"}
        borderRadius={"md"}
        boxShadow={"lg"}
      >
        <div>test</div>
        <div>test</div>
      </Box>
    </div>
  );
}

export default App;
