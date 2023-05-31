export interface Category {
  name: string
  elements?: Element[]
}

export interface Element {
  name: string
  progress: Progress
}

export type Progress = "dev" | "new" | "block"
