import test from 'ava';
import fn from '.';

const fruits = ['apples', 'oranges', 'peaches', 'strawberries'];

test('Valid Check', t => {
	t.true(fn(['apples', 'oranges'], fruits));
	t.true(fn([1, 3], [1, 2, 3, 4]));
});

test('Invalid Check', t => {
	t.false(fn(['apples', 'oranges', 'pineapple', 'ice cream'], fruits), false);
	t.false(fn(['apples', 'oranges', 'pineapple', 4, 5, 'tee-hee'], fruits), false);
});

test('Assertion Check', t => {
	const err = t.throws(() => fn(123, 22), Error);
	t.is(err.message, 'Expected array as inputs');
});
