/**
 * 1. test.each(table)(name,fn,timeout)
 *  - table: Array
 *  - name: String => the title of the test block
        Generate unique test titles by positionally injecting parameters with printf formatting:
            %p - pretty-format.
            %s- String.
            %d- Number.
            %i - Integer.
            %f - Floating point value.
            %j - JSON.
            %o - Object.
            %# - Index of the test case.
            %% - single percent sign ('%'). This does not consume an argument.

        Generate unique test titles by injecting properties of test case object with $variable
            To inject nested object values use you can supply a keyPath i.e. $variable.path.to.value
            You can use $# to inject the index of the test case
            You cannot use $variable with the printf formatting except for %%
 *  - fn: Function the test to be ran, this is the function that will receive the parameters in each row as function arguments.
 */

const data = [
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
]

test.each(data)('.Test add function (%i, %i)', (a, b, expected) => {
  expect(a + b).toBe(expected)
})

const items = [
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 2, expected: 4 },
]

test.each(items)('.Test add with($a, $b)', ({ a, b, expected }) => {
  expect(a + b).toBe(expected)
})
