import { beforeEach, describe, equal, test } from '@jest/globals';
import { LinkedList } from '../src/LinkedList.js';

describe('LinkedList', () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

        describe('head()', () => {
    test('returns undefined if the list is empty', () => {
        expect(list.head()).toEqual(undefined);
    });

    test('returns the value of the first node if the list is not empty', () => {
        list.append('alpha')
        expect(list.head()).toEqual('alpha');
    });
});

    describe('tail()', () => {
    test('returns undefined if the list is empty', () => {
        expect(list.tail()).toEqual(undefined);
    });

    test('returns the value of the last node if the list is not empty', () => {
        list.append('alpha')
        expect(list.tail()).toEqual('alpha');
    });
});

    describe('at()', () => {
    test('returns undefined if the list is empty', () => {
        expect(list.at(0)).toEqual(undefined);
    });

    test('returns undefined if there is no an element at the given index', () => {
        expect(list.at(1)).toEqual(undefined);
    });

    test('returns the value of the node at the given index', () => {
        list.append('alpha');
        list.append('beta');
        list.append('gamma');
        expect(list.at(2)).toEqual('gamma');
    });
});


describe('append(value)', () => {
    test('add a node to the empty list, it becomes a head', () => {
        list.append('alpha');
        expect(list.head()).toEqual('alpha');
    });

        test('add a node to the not empty list, it becomes a tail', () => {
        list.append('beta');
        expect(list.tail()).toEqual('beta');
    });
});

});