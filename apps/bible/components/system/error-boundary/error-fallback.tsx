'use client'

import { Center } from "@/components/primitives/center";
import { Stack } from "@/components/primitives/stack";
import { Text } from "@/components/typography/text";
import { Button } from "@/components/ui/button";
import { useErrorBoundary } from "react-error-boundary";

export function ErrorFallback({ error }: { error: { message: string } }) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <Stack gap='xs'>
      <Text tone='muted'>Something went wrong:</Text>
      <Button size='sm' className="w-fit" variant='destructive' onClick={resetBoundary}> {error.message}, try again ?</Button>
    </Stack>
  );
}
