"use client";

import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { Route } from "next";
import { EmbededProps } from "./go-link";

type WithEmbededProps = PropsWithChildren & Required<EmbededProps>;

export const WithEmbeded: FC<WithEmbededProps> = (props) => {
  const pathname = usePathname() as Route;
  const href = (pathname + props.embeded) as Route;
  return <Link href={href}>{props.children}</Link>;
};
