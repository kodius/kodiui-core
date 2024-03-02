import { Stack } from "@/components/primitives/stack";
import { Text } from "@/components/typography/text";
import { routes } from "@/site/routes";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const NestedDynamicRoutesPage = () => {
  return (
    <Stack>
      <Layout title="Autocomplete / typesefe">
        <Link href="/bible/routing/nested-dynamic-routes/todo/1">Todo #1</Link>
      </Layout>
      <Layout title="Continue route - works, bug">
        {/*@ts-ignore*/}
        <Link href="nested-dynamic-routes/todo/1">Todo #1</Link>
      </Layout>
      <Layout title="function / typesafe">
        <Link
          href={routes.bible.routing.nestedDynamicRoutes.todo[":id"]("2").index}
        >
          Todo #1
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

export default NestedDynamicRoutesPage;
