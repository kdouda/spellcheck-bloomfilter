import { BloomFilter } from '../src/bloom';
import { expect } from 'chai';

describe('Test bloom filter', () => {
    it('adds and contains added item', () => {
        const filter = new BloomFilter(10, 0.01);
        filter.add('hello world');
        expect(filter.check('hello world')).to.be.true;
    });

    it('does not contains item when not set', () => {
        const filter = new BloomFilter(10, 0.01);
        expect(filter.check('hello world')).to.be.false;
    });

    it('does not contains item when not set', () => {
        const filter = new BloomFilter(10, 0.01);
        filter.add('hello world');
        expect(filter.check('goodbye world')).to.be.false;
    });
});

describe('Bloom filter serializes', () => {
    it('bloom filter serialization works', () => {
        const filter = new BloomFilter(10, 0.01);
        filter.add('hello world');
        expect(filter.serialize()).to.not.be.empty;
    });

    it('deserialized filter contains hello world', () => {
        const filter = new BloomFilter(10, 0.01);
        filter.add('hello world');
        const serialized = JSON.stringify(filter.serialize());
        expect(serialized).to.not.be.empty;
        const deserialized = JSON.parse(serialized);
        const deserializedFilter = BloomFilter.deserialize(deserialized);
        expect(deserializedFilter).to.not.be.empty;
        expect(filter.check('hello world')).to.be.true;
        expect(deserializedFilter.check('hello world')).to.be.true;
    });
});