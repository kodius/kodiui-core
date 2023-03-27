import "@kodiui/ui/style.css";
import { Box, FlexBox } from "@kodiui/ui";
import { theme } from "./contract.css";

function App() {
  return (
    <div className={theme}>
      <Box
        as="button"
        background={{ hover: "green8", light: "green6", dark: "green6" }}
        color="green10"
        p="xs"
        px="sm"
        borderRadius="sm"
        m="xl"
        __margin={100}
        __background="red"
      >
        Button
      </Box>
        <FlexBox gap="lg">
         <div>1</div>
         <div>2</div>
         <div>3</div>
         <div>4</div>
         <div>5</div>
      </FlexBox>
    </div>
  );
}

export default App;
