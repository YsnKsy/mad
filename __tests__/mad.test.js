import Mad from '../src/mad'

test('Mad.test', () => {
  const testMad = new Mad('Test')
  expect(testMad.test()).toBe('Test')
})
