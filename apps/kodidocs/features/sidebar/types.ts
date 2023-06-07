export interface Category {
  name: string
  elements?: Element[]
}

export interface Element {
  name: string
  description: string
  progress?: Progress
  href?: string
}

export type Progress = "dev" | "new" | "block"
