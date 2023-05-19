import { Box } from '@kodiui/ui'
import { getServerSession } from 'next-auth'

export default async function Home() {
  const sess = await getServerSession()

  return (
    <div>
      email: {sess?.user?.email}
      <Box background="sky10" p="sm">
        bok
      </Box>
    </div>
  )
}
