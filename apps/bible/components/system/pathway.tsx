"use client";

import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";

export type PathwayRoutes = `/user/${string}` | `/todo/${string}`;

export type PathwayProps = {
  path: PathwayRoutes;
} & PropsWithChildren;

export const Pathway: FC<PathwayProps> = (props) => {
  const pathname = usePathname() as Route;
  const href = (pathname + props.path) as Route;
  return <Link href={href}>{props.children}</Link>;
};
