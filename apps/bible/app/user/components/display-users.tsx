import { GetUserResponse } from "@/app/api/users";
import { Stack } from "@/components/primitives/stack";
import { Text } from "@/components/typography/text";
import { User } from "./user";
import { FC } from "react";

export const DisplayUsers: FC<GetUserResponse> = ({ users }) => {
  return (
    <Stack>
      <Text>Users:</Text>
      <Stack className="max-h-[200px] overflow-scroll p-md border-4">
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </Stack>
    </Stack>
  );
};
