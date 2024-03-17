import { BloomFilter } from './bloom';

import { createReadStream, writeFileSync } from "fs";
import readline from "readline";

const bloom = new BloomFilter(
    466550, // line count - could be read from file
    0.01
);

readline.createInterface({
    input: createReadStream('words.txt'),
    terminal: false
}).on('line', (line) => {
    bloom.add(line);
}).on('close', () => {
    console.log('done');
    console.timeEnd('done');
    writeFileSync('bloom.json', JSON.stringify(bloom.serialize()));
});