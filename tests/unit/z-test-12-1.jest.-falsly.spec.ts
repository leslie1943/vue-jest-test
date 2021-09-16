const callFn = () => {
  return {
    r1: false,
    r2: '',
    r3: null,
    r4: undefined,
  }
}

test('1: Play audio getter', () => {
  const ress = callFn()
  expect(ress.r1).toBeFalsy()
  expect(ress.r2).toBeFalsy()
  expect(ress.r3).toBeFalsy()
  expect(ress.r4).toBeFalsy()
})
