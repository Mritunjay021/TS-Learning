export type ApiState<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string };
