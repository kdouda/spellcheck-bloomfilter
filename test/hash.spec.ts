import { hash } from '../src/hash'; // this will be your custom import
import { expect } from 'chai';

describe('Test murmur hash', () => { // the tests container
    it('test empty hash without seed', () => {
        expect(hash("", 0x00000000)).to.equal(0x00000000);
    });

    it('test empty hash with seed', () => {
        expect(hash("", 0x00000001)).to.equal(0x514E28B7);
    });

    it('test empty hash with seed', () => {
        expect(hash("", 0xffffffff)).to.equal(0x81F16F39);
    });

    it('test test hash with 0x00000000 seed', () => {
        expect(hash("test", 0x00000000)).to.equal(0xba6bd213);
    });

    it('test test hash with 0x9747b28c seed', () => {
        expect(hash("test", 0x9747b28c)).to.equal(0x704b81dc);
    });

    it('test Hello, world! hash with 0x00000000 seed', () => {
        expect(hash("Hello, world!", 0x00000000)).to.equal(0xc0363e43);
    });

    it('test Hello, world! hash with 0x9747b28c seed', () => {
        expect(hash("Hello, world!", 0x9747b28c)).to.equal(0x24884CBA);
    });

    it('test The quick brown fox jumps over the lazy dog hash with 0x00000000 seed', () => {
        expect(hash("The quick brown fox jumps over the lazy dog", 0x00000000)).to.equal(0x2e4ff723);
    });

    it('test The quick brown fox jumps over the lazy dog hash with 0x2FA826CD seed', () => {
        expect(hash("The quick brown fox jumps over the lazy dog", 0x9747b28c)).to.equal(0x2FA826CD);
    });
});