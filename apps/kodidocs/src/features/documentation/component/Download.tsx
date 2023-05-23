import React from 'react'
import { downloadFile, DownloadFileArgs } from '../utils'
import { Button } from '@cli-components/Button'
import { DownloadIcon } from 'lucide-react'

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
  )
}
