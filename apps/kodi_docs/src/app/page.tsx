import { Stack } from "@/components/primitives/Stack";
import { Box } from "@components/primitives/Box";
import { Sidebar } from "@components/primitives/Sidebar";
import { Switcher } from "@components/primitives/Switcher";

export default function Home() {
  return (
    <>
      <Stack gap="lg">
        <div>element 1</div>
        <div>element 2</div>
        <div>element 3</div>
      </Stack>
      <Box p="lg" className="bg-red-200">
        bok
      </Box>
      <Switcher>
        <div>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore{" "}
        </div>
        <div>element 2</div>
      </Switcher>
      <Sidebar side="right" gap="0">
        <div className="bg-blue-500">Elemensadfsfldksafjlksadjf 1</div>
        <div className="bg-red-500 basis-[500px]">Element 2</div>
      </Sidebar>
    </>
  );
}
