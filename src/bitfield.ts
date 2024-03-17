const BIT_SIZE = 32;

export class Bitfield
{
    private size: number;

    private array: Uint32Array;

    constructor(n: number) {
        this.size = n;
        this.array = new Uint32Array(Math.ceil(n / BIT_SIZE));
    }

    private arrayPosition(index: number) {
        return (index / BIT_SIZE | 0); //Math.floor(index / 8);
    }

    private subindex(index: number) {
        return index % BIT_SIZE;
    }

    private getValue(index: number) {
        return this.array[this.arrayPosition(index)];
    }

    set(index: number) : void {
        if (index > this.size) {
            throw new Error("Index out of bounds");
        }

        let x = this.getValue(index);
        const n = this.subindex(index);
        const pos = this.arrayPosition(index);

        this.array[pos] = x | ((1 << n));
    }

    get(index: number) : boolean {
        if (index > this.size) {
            throw new Error("Index out of bounds");
        }
        return (
            this.array[this.arrayPosition(index)] & (1 << (index % BIT_SIZE))
        ) > 0;
    }

    serialize() : string {
        return this.array.toString();
    }

    static deserialize(data: string, size: number) : Bitfield {
        const bf = new Bitfield(size);
        // todo - more efficient serialization
        bf.array = Uint32Array.from(data.split(",").map(Number));
        return bf;
    }
}