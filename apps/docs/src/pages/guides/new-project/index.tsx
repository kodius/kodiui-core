import { PageTemplate } from "@/templates";
import dynamic from "next/dynamic";
import React from "react";

const Syntax = dynamic(() => import("@/components/input/SyntaxHighligter"), {
  ssr: false,
});

const NewProjectPage = () => {
  return (
    <PageTemplate title="New Project">
      <Syntax code="lol" />
    </PageTemplate>
  );
};

export default NewProjectPage;
