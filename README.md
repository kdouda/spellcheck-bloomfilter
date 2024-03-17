# TypeScript spellcheck bloom filter

Implementation of a bloom filter in TypeScript with the indended purpose of spellchecking.

## Description

Simplistic implementation of a bloom filter for spellchecking in TypeScript, using the murmur3 hash function, a dictionary file and simple serialization/deserialization of the bloom filter.

For the linked dictionary of 467k files, the resulting JSON is roughly 1.1MB raw, or roughly 621k gzipped, with a false positive rate setting of 1%. Generating the file takes roughly 2 seconds on an Apple M2 Max CPU. Benchmark script reports roughly 270 kops/s when looking up a word.

## Getting Started

### Dependencies

* developed on Node v21.7.1
* all requirements are listed in package.json, all apart from tsx are related to testing, and not necesasry.

### Installing

* clone this project `git clone https://github.com/kdouda/spellcheck-bloomfilter.git`
* install dependencies `npm i`

### Executing program

* download the word list you want to fill the dictionary with into the root directory of this repository
* generate the bloom filter using `npm run generate`
* this should create a large JSON file `bloom.json`

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the MIT license.

## Acknowledgments

* [murmurhash-js](https://github.com/garycourt/murmurhash-js/blob/master/murmurhash3_gc.js) for the implementation of murmur3 in JavaScript
* [Coding Challenge by John Crickett](https://substack.com/@johncrickett) for the idea
* [english-words](https://github.com/dwyl/english-words) for the dictionary file

## Lessons learnt
* implementing hash functions is hard, don't do it
* tdd is okay