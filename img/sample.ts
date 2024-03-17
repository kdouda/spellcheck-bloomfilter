import { BloomFilter } from "../src/bloom";
import { readFileSync } from "fs";

const bf = BloomFilter.deserialize(
    JSON.parse(
        readFileSync('bloom.json', 'utf-8')
    )
);

if (bf.check('hello')) {
    // likely in the set, awesome!
    // now we run a more expensive check
} else {
    // definitely not in the set, is a typo!
}