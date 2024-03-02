import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { WithEmbeded } from "./with-embeded";

export type EmbededProps = {
  embeded?: EmbededRoutes;
};

export type GoLinkProps = EmbededProps & PropsWithChildren;

type EmbededRoutes = `/user/${string}` | `/todo/${string}`;

export const GoLink: FC<GoLinkProps> = ({ embeded, ...rest }) => {
  if (embeded) return <WithEmbeded embeded={embeded} {...rest} />;
  return <Link href="/">{rest.children}</Link>;
};

// ------------------------------------------------------------------------------

// to check EmbededRoutes we can make a test
// but whats the point? if we change the route, we have to change the test, same
// as if we change the type EmbdedeRoutes

// function isPartOfStaticRoutes(input: string): boolean {
//   const routes: StaticRoutes[] = [
//     `/`,
//     `/bible/data-fetching/parrallel-and-sequential`,
//     `/bible/routing/intercepting-routes`,
//     `/bible/routing/nested-dynamic-routes`,
//     `/bible/project-structure/module`,
//     `/todos`
//   ];
//
//   return routes.some(route => route.includes(input));
// }
