export interface Navigator {
  id: number
  name: string
  isParent?: boolean
  children?: Navigator[]
}
