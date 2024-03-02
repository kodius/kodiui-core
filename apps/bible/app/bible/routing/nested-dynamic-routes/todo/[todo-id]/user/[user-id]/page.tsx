import { BasicLayout } from "@/app/bible/layouts/basic-layout";
import { Stack } from "@/components/primitives/stack";
import { Bridge } from "@/components/system/bridge";
import Link from "next/link";

const UserPageById = () => {
  return (
    <Stack>
      <BasicLayout title="Bridge / use anywhere / typesafe">
        <Bridge href="userById" params={{ "todo-id": "20", "user-id": "10" }}>
          user by id
        </Bridge>
      </BasicLayout>
      <BasicLayout title="Bridge / use anywhere / typesafe">
        <Bridge href="userById" params={{ "todo-id": "20", "user-id": "10" }}>
          user by id
        </Bridge>
      </BasicLayout>
      <BasicLayout title="Bridge / use anywhere / typesafe">
        <Bridge href="todoById">todo by id</Bridge>
      </BasicLayout>
      <BasicLayout title="Open bridge">
        <Link href={"/bible/routing/nested-dynamic-routes/bridge"}>Bridge</Link>
      </BasicLayout>
    </Stack>
  );
};

export default UserPageById;
