import { Bitfield } from '../src/bitfield'; // this will be your custom import
import { expect } from 'chai';

describe('Test elementary bitfield operations', () => { // the tests container
    it('bitfield first bit true', () => {
        const bf = new Bitfield(1);
        bf.set(0);
        expect(bf.get(0)).to.be.true;
    });

    it('bitfield first bit false', () => {
        const bf = new Bitfield(1);
        expect(bf.get(0)).to.be.false;
    });

    it('bitfield two bits', () => {
        const bf = new Bitfield(2);
        bf.set(1);
        expect(bf.get(0)).to.be.false;
        expect(bf.get(1)).to.be.true;
    });

    it('bitfield three bits', () => {
        const bf = new Bitfield(3);
        bf.set(1);
        bf.set(2);
        expect(bf.get(0)).to.be.false;
        expect(bf.get(1)).to.be.true;
        expect(bf.get(2)).to.be.true;
    });

    it('bitfield eight bits 1', () => {
        const bf = new Bitfield(8);
        bf.set(7);
        expect(bf.get(0)).to.be.false;
        expect(bf.get(1)).to.be.false;
        expect(bf.get(2)).to.be.false;
        expect(bf.get(7)).to.be.true;
    });

    it('bitfield eight bits 2', () => {
        const bf = new Bitfield(8);
        bf.set(0);
        bf.set(7);
        expect(bf.get(0)).to.be.true;
        expect(bf.get(1)).to.be.false;
        expect(bf.get(2)).to.be.false;
        expect(bf.get(7)).to.be.true;
    });
});