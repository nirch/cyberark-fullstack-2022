const Exercises = require('./exercises');
let exercises;

beforeAll(() => {
  exercises = new Exercises();
});

test('2 is even', () => {
  expect(exercises.isEven(2)).toBeTruthy();
});

test('remove at least one', () => {
  const arr = [1, 2, 3];
  const before = arr.length;
  exercises.removeAtLeastOne(arr);
  const after = arr.length;
  expect(before).toBeGreaterThan(after);
});

test('simplify string', () => {
  const x = exercises.simplify('jdk!kdls.');
  console.log(x);
  expect(exercises.simplify('jdk!kdls.')).toEqual(
    expect.not.stringContaining('!')
  );
  expect(exercises.simplify('jdk!kdls.')).toEqual(
    expect.not.stringContaining('#')
  );
  expect(exercises.simplify('jdk!kdls.')).toEqual(
    expect.not.stringContaining('.')
  );
  expect(exercises.simplify('jdk!kdls.')).toEqual(
    expect.not.stringContaining(',')
  );
  expect(exercises.simplify('jdk!kdls.')).toEqual(
    expect.not.stringContaining("'")
  );
});
