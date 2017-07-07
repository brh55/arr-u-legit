import test from 'ava';
import fn from '.';

const fruits = ['apples', 'oranges', 'peaches', 'strawberries'];

test('Valid Check', t => {
	t.true(fn(['apples', 'oranges'], fruits));
	t.true(fn([1, 3], [1, 2, 3, 4]));
});

test('Valid Check w/ Keys', t => {
	t.deepEqual([], fn(['apples', 'oranges'], fruits, true));
	t.deepEqual([], fn([1, 3], [1, 2, 3, 4], true));
});

test('Invalid Check w/ Keys', t => {
	t.deepEqual(['milk','ice cream'], fn(['apples', 'oranges', 'milk', 'ice cream'], fruits, true));
	t.deepEqual([4, 5, 'tee-hee'], fn(['apples', 'oranges', 4, 5, 'tee-hee'], fruits, true));
});

test('Invalid Check', t => {
	t.false(fn(['apples', 'oranges', 'pineapple', 'ice cream'], fruits), false);
	t.false(fn(['apples', 'oranges', 'pineapple', 4, 5, 'tee-hee'], fruits), false);
});

test('Assertion Check', t => {
	const err = t.throws(() => fn(123, 22), Error);
	t.is(err.message, 'Expected array as inputs');
});
