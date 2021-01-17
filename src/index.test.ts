import { nullAsUndefined, nullValuesAsUndefined } from "./index";

describe("nullAsUndefined()", () => {
  it("returns `undefined` when passed `null`", () => {
    const result = nullAsUndefined(null);

    expect(result).toBeUndefined();
  });

  it("returns `undefined` when passed `undefined`", () => {
    const result = nullAsUndefined(undefined);

    expect(result).toBeUndefined();
  });

  it("returns the original value when passed non-`null`-or-`undefined`", () => {
    const value = "test";
    const result = nullAsUndefined(value);

    expect(result).toEqual(value);
  });
});

describe("nullValuesAsUndefined()", () => {
  it("replaces `null` values with `undefined`, leaving everything else as it was", () => {
    const result = nullValuesAsUndefined({
      a: undefined,
      b: null,
      c: "test",
    });

    expect(result).toEqual({
      a: undefined,
      b: undefined,
      c: "test",
    });
  });
});
