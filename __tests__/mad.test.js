import Mad from '../src/mad'

test('Mad.test', () => {
  const testMad = new Mad(10, 'mad')
  expect(testMad.test()).toBe('10 mad')
})

test('Mad.to("centime")', () => {
  const testMad = new Mad(10, 'mad')
  expect(testMad.to('centime')).toBe(1000)
})
