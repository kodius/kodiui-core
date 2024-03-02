import { Heading } from '@/components/typography/heading'
import { sleep } from '@/lib/utils'

export default async function TodosSettingsPage() {
  await sleep(2000)
  return <Heading level="4">Settings Todos page</Heading>
}
