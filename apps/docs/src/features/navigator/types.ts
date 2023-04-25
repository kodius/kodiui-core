import { Navigator } from './components'

export interface Navigator {
  id: number
  name: string
  isParent?: boolean
  children?: Navigator[]
  href?: string
  icon?: string
  state?: ComponentState
}

type ComponentState = 'completed' | 'in development' | 'new' | 'todo'
