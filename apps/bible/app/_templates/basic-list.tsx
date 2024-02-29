import { Stack } from "@/components/primitives/stack";
import { Text } from "@/components/typography/text";
import { FC, PropsWithChildren } from "react";

type Props = {
  title: string;
} & PropsWithChildren;

export const BasicList: FC<Props> = (props) => {
  return (
    <Stack>
      <Text>{props.title}</Text>
      <Stack className="max-h-[200px] overflow-scroll p-md border-4">
        {props.children}
      </Stack>
    </Stack>
  );
};
