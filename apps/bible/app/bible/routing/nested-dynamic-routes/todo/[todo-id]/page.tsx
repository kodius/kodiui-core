import { Stack } from "@/components/primitives/stack";
import { Text } from "@/components/typography/text";
import { resolveUserIdRoute, routes, routesResolvers } from "@/site/routes";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

type Props = {
  params: {
    "todo-id": string;
  };
};

const UserPageById = ({ params }: Props) => {
  return (
    <Stack>
      <Layout title="Autocomplete / typesefe">
        <Link href="/bible/routing/nested-dynamic-routes/todo/1/user/2">User #1</Link>
      </Layout>
      <Layout title="Continue route - works, bug">
        {/*@ts-ignore*/}
        <Link href={`${params["todo-id"]}/user/1`}>User #1</Link>
      </Layout>
      <Layout title="function / typesafe">
        <Link
          href={
            routes.bible.routing.nestedDynamicRoutes.todo[":todo-id"](
              params["todo-id"],
            ).user[":user-id"]("2").index
          }
        >
          User #1
        </Link>
      </Layout>

      <Layout title="resolver fn">
        <Link href={resolveUserIdRoute(params["todo-id"], "1")}>User #1</Link>
      </Layout>
      <Layout title="resolver object fn">
        <Link href={routesResolvers.resolveUserIdRoute(params["todo-id"], "1")}>
          User #1
        </Link>
      </Layout>
    </Stack>
  );
};

const Layout: FC<{ title: string } & PropsWithChildren> = ({
  title,
  children,
}) => (
  <Stack gap="xs">
    <Text>{title}</Text>
    {children}
  </Stack>
);
export default UserPageById;
