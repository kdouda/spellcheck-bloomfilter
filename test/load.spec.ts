import { BloomFilter } from '../src/bloom';
import { readFileSync } from "fs";
import { expect } from 'chai';

describe('Load bloom.json', () => {
    const bf = BloomFilter.deserialize(
        JSON.parse(
            readFileSync('bloom.json', 'utf-8')
        )
    );

    it('contains hello', () => {
        expect(bf.check('hello')).to.be.true;
    });

    it('contains Helodermatidae', () => {
        expect(bf.check('Helodermatidae')).to.be.true;
    });

    it('does not contain nonsense', () => {
        expect(bf.check('1471871981978w1f9a1wefawefawefawefawef')).to.be.false;
    });
});