import { Greeter } from '../src/Greeter';

test('Should greet with message', () => {
  const greeter = new Greeter('friend');
  expect(greeter.greet('Bonjour')).toBe('Bonjour, friend!');
});
