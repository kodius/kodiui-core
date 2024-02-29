import { getUsers } from "@/app/api/users";
import { User } from "./user";
import { BasicList } from "@/app/_templates/basic-list";

export const ShowUsers = async () => {
  const { users } = await getUsers("bad exmaple");
  return (
    <BasicList title="Users:">
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </BasicList>
  );
};
