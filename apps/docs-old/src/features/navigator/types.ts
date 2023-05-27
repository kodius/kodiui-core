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

export type ComponentState = 'completed' | 'dev' | 'new' | 'todo'
