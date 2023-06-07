import { categories } from "../data/categories"

export const getElementDesription = (name: string): string => {
  const allElements = categories.flatMap((c) => c.elements)
  return (
    allElements.find((e) => e?.name === name)?.description || "no descirption"
  )
}
