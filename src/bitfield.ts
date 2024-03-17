export class Bitfield
{
    private size: number;

    private array: Uint8Array;

    constructor(n: number) {
        this.size = n;
        this.array = new Uint8Array(Math.ceil(n / 8));
    }

    private arrayPosition(index: number) {
        return (index / 8 | 0); //Math.floor(index / 8);
    }

    private subindex(index: number) {
        return index % 8;
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
            this.array[this.arrayPosition(index)] & (1 << (index % 8))
        ) > 0;
    }

    serialize() : string {
        return Buffer.from(this.array).toString('hex');
    }

    static deserialize(data: string, size: number) : Bitfield {
        const bf = new Bitfield(size);
        bf.array = Buffer.from(data, 'hex');
        return bf;
    }
}