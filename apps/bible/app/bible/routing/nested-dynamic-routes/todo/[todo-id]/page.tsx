import { BasicLayout } from '@/app/bible/layouts/basic-layout'
import { Stack } from '@/components/primitives/stack'
import { Pathway } from '@/components/system/pathway'
import { resolveUserIdRoute, routes, routesResolvers } from '@/site/routes'
import Link from 'next/link'

type Props = {
  params: {
    'todo-id': string
  }
}

const UserPageById = ({ params }: Props) => {
  return (
    <Stack>
      <BasicLayout title="Autocomplete / typesefe">
        <Link href="/bible/routing/nested-dynamic-routes/todo/1/user/2">User #1</Link>
      </BasicLayout>
      <BasicLayout title="Continue route - works, bug">
        {/* @ts-ignore */}
        <Link href={`${params['todo-id']}/user/1`}>User #1</Link>
      </BasicLayout>
      <BasicLayout title="function / typesafe">
        <Link
          href={
            routes.bible.routing.nestedDynamicRoutes.todo[':todo-id'](params['todo-id']).user[':user-id']('2').index
          }
        >
          User #1
        </Link>
      </BasicLayout>
      <BasicLayout title="resolver fn">
        <Link href={resolveUserIdRoute(params['todo-id'], '1')}>User #1</Link>
      </BasicLayout>
      <BasicLayout title="resolver object fn">
        <Link href={routesResolvers.resolveUserIdRoute(params['todo-id'], '1')}>User #1</Link>
      </BasicLayout>
      <BasicLayout title="pathway">
        <Pathway path="/user/2">User #2</Pathway>
      </BasicLayout>
    </Stack>
  )
}

export default UserPageById
