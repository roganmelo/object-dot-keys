import objectDotKeys from '../dist';

const obj = {
  a: { b: 'c' },
  b: [{ c: 'a' }, { c: 'b' }, { c: 'c' }]
};

test('It should return an error asking for a valid first parameter.', () => {
  const invalidParameterError = new Error('You have to provide a valid first parameter.');

  expect(() => objectDotKeys()).toThrowError(invalidParameterError);
  expect(() => objectDotKeys(1)).toThrowError(invalidParameterError);
  expect(() => objectDotKeys('obj')).toThrowError(invalidParameterError);
  expect(() => objectDotKeys(null)).toThrowError(invalidParameterError);
});

test('It should return the array of keys with dot notation from given object.', () => {
  expect(objectDotKeys(obj)).toEqual(['a.b', 'b.0.c', 'b.1.c', 'b.2.c']);
});

test('It should return the array of keys with custom separator.', () => {
  expect(objectDotKeys(obj, '_')).toEqual(['a_b', 'b_0_c', 'b_1_c', 'b_2_c']);
});
