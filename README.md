# `null-as-undefined`

Convert `null` values to `undefined` in a way that TypeScript understands.

## Installation

Install in the usual way:

```sh
npm install null-as-undefined
```

or

```sh
yarn add null-as-undefined
```

depending on your package manager of choice.

## Usage

This package exports two functions and two types:

- `nullAsUndefined<T>(value: T): NullAsUndefined<T>`
- `nullValuesAsUndefined<T>(obj: T): NullValuesAsUndefined<T>`
- `NullAsUndefined<T>`
- `NullValuesAsUndefined<T>`

### `nullAsUndefined<T>(value: T): NullAsUndefined<T>`

Takes any value and returns `undefined` if the value was `null`. Otherwise it
returns the original value.

### `nullValuesAsUndefined<T>(obj: T): NullValuesAsUndefined<T>`

Takes any object and returns a new object, replacing all `null` values with
`undefined`.

### `NullAsUndefined<T>`

Casts `null` values to `undefined`.

### `NullValuesAsUndefined<T>`

Casts all `null` values of an object to `undefined`.
