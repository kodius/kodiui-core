import { DownloadIcon } from "@/assets/icons/DownloadIcon";
import { Button } from "@/components";
import React from "react";
import { downloadFile, DownloadFileArgs } from "../utils";

export const Download = (args: DownloadFileArgs) => {
  return (
    <Button
      variant="soft"
      tone="brandAccent"
      onClick={() => downloadFile(args)}
      icon={<DownloadIcon />}
      size="sm"
      width="fit"
    >
      Download
    </Button>
  );
};
