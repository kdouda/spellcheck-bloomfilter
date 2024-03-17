import benny from 'benny';
import { BloomFilter } from '../src/bloom';
import { readFileSync } from "fs";

const bf = BloomFilter.deserialize(
  JSON.parse(
      readFileSync('bloom.json', 'utf-8')
  )
);

benny.suite(
  'lookup',
  benny.add('lookup hello', () => {
    bf.check('hello');
  }),
  benny.add('lookup Zuzana', () => {
    bf.check('Zuzana');
  }),
  benny.cycle(),
  benny.complete()
);