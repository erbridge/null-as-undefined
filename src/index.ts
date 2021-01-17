export type NullAsUndefined<T> = T extends null ? undefined : T;

export type NullValuesAsUndefined<T> = {
  [K in keyof T]: NullAsUndefined<T[K]>;
};

export const nullAsUndefined = <T>(value: T): NullAsUndefined<T> =>
  (value === null ? undefined : value) as NullAsUndefined<T>;

export const nullValuesAsUndefined = <T>(obj: T): NullValuesAsUndefined<T> => {
  return Object.entries(obj).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: nullAsUndefined(value),
    }),
    {} as NullValuesAsUndefined<T>
  );
};
