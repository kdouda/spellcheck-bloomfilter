import { Bitfield } from "./bitfield";
import { hash } from "./hash";

export type BloomFilterSerializableInterface = {
    size: number;
    fp: number;
    hashCount: number;
    m: number;
    bitfield: string;
};

/**
 * String bloom filter.
 */
export class BloomFilter 
{
    /**
     * Number of elements the bloom filter should hold.
     */
    private n : number;

    /**
     * Maximum false positive rate.
     */
    private fp: number;

    /**
     * Hash function count.
     */
    private hashCount : number;

    /**
     * Size of bit array.
     */
    private m : number;

    /**
     * 
     */
    private bitfield : Bitfield;

    constructor(n: number, fp: number) {
        this.n = n;
        this.fp = fp;
        this.m = Math.ceil(-(n  * Math.log(fp)) /  (Math.log(2) ** 2));
        this.hashCount = Math.ceil((this.m / this.n) * Math.log(2));
        this.bitfield = new Bitfield(this.m);
    }

    add(item: string) : void {
        for (let i = 0; i < this.hashCount; i++) {
            const digest = hash(item, i) % this.m;
            this.bitfield.set(digest);
        }
    }

    check(item: string) : boolean {
        for (let i = 0; i < this.hashCount; i++) {
            const digest = hash(item, i) % this.m;

            if (!this.bitfield.get(digest)) {
                return false;
            }
        }

        return true;
    }

    serialize() : BloomFilterSerializableInterface {
        return {
            size: this.n,
            fp: this.fp,
            hashCount: this.hashCount,
            m: this.m,
            bitfield: this.bitfield.serialize()
        };
    }

    static deserialize(data: BloomFilterSerializableInterface) : BloomFilter {
        const bf = new BloomFilter(data.size, data.fp);
        bf.bitfield = Bitfield.deserialize(data.bitfield, data.m);
        return bf;
    }
}