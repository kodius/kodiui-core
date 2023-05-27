import z from 'zod'

export type ZodKeyChecker<T> = {
  [K in keyof T]?: z.ZodTypeAny
}
