import { useParams as useNextParams } from "next/navigation";

export type Params = {
  "todo-id"?: string;
  "user-id"?: string;
};

export type ParamKeys = keyof Params

export const useParams = () => useNextParams<Params>();
