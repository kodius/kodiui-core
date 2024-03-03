'use client'

import { Button } from '@/components/ui/button'
import { createTodo } from '../api'

export const CreateTodo = () => {
  return (
    <Button
      onClick={async () => {
        await createTodo({ todo: 'todod', userId: 101 })
      }}
    >
      Create todo
    </Button>
  )
}
