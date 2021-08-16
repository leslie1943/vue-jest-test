interface FooParams {
  type: 'foo'
  value: string
}

interface BarParams {
  type: 'bar'
  value: number
}

type Params = FooParams | BarParams

function toTest<TParams extends Params>(
  type: TParams['type'],
  value: TParams['value']
): void {
  console.log(
    '🚀 ~ file: advanced-tagged-union.types.ts ~ line 17 ~ value',
    value
  )
  console.log(
    '🚀 ~ file: advanced-tagged-union.types.ts ~ line 17 ~ type',
    type
  )
}

toTest('foo', 'leslie')
toTest('bar', 22)
// toTest('not-1', true) // Argument of type '"not-1"' is not assignable to parameter of type '"foo" | "bar"'.ts(2345)
// toTest('bar', true) // Argument of type 'true' is not assignable to parameter of type 'string | number'.ts(2345)
