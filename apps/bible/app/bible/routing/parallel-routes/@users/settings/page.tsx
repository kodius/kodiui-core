import { Heading } from '@/components/typography/heading'
import { sleep } from '@/lib/utils'

export default async function UsersSettingsPage() {
  await sleep(1400)
  return <Heading level="4">Settings Users page</Heading>
}
