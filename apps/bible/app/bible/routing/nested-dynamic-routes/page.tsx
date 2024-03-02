import { Stack } from "@/components/primitives/stack"
import { resloveTodoIdRoute, routes, routesResolvers } from "@/site/routes"
import Link from "next/link"
import { BasicLayout } from "../../layouts/basic-layout"

const NestedDynamicRoutesPage = () => {
  return (
    <Stack>
      <BasicLayout title="Autocomplete / typesefe">
        <Link href="/bible/routing/nested-dynamic-routes/todo/1">Todo #1</Link>
      </BasicLayout>
      <BasicLayout title="Continue route - works, bug">
        {/* @ts-ignore  */}
        <Link href="nested-dynamic-routes/todo/1">Todo #1</Link>
      </BasicLayout>
      <BasicLayout title="function / typesafe">
        <Link href={routes.bible.routing.nestedDynamicRoutes.todo[":todo-id"]("2").index}>Todo #1</Link>
      </BasicLayout>
      <BasicLayout title="resolver fn">
        <Link href={resloveTodoIdRoute("2")}>Todo #1</Link>
      </BasicLayout>
      <BasicLayout title="resolver object fn">
        <Link href={routesResolvers.resloveTodoIdRoute("2")}>Todo #1</Link>
      </BasicLayout>
    </Stack>
  )
}

export default NestedDynamicRoutesPage
