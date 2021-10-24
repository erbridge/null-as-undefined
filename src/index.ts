export type NullAsUndefined<T> = T extends null ? undefined : T;

export type NullValuesAsUndefined<T extends Record<string, unknown>> = {
  [K in keyof T]: NullAsUndefined<T[K]>;
};

export const nullAsUndefined = <T>(value: T): NullAsUndefined<T> =>
  (value === null ? undefined : value) as NullAsUndefined<T>;

export const nullValuesAsUndefined = <T extends Record<string, unknown>>(
  obj: T
): NullValuesAsUndefined<T> =>
  Object.entries(obj).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: nullAsUndefined(value),
    }),
    {} as NullValuesAsUndefined<T>
  );
