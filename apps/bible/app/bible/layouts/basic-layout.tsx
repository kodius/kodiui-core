import { Stack } from '@/components/primitives/stack'
import { Text } from '@/components/typography/text'
import { FC, PropsWithChildren } from 'react'

export const BasicLayout: FC<{ title: string } & PropsWithChildren> = ({ title, children }) => (
  <Stack gap="xs" className="border-b py-sm">
    <Text weight="medium">{title}</Text>
    {children}
  </Stack>
)
