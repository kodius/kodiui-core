import { getUsers } from "@/app/api/users";
import { Stack } from "@/components/primitives/stack";
import { Text } from "@/components/typography/text";
import { User } from "./user";

export const ShowUsers = async () => {
  const { users } = await getUsers("bad exmaple");
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
