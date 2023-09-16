import { Vector } from "./vector1";

export class Vector2 extends Vector
{
  y: number;

  static get down() { return new this(0, -1); }
  static get up() { return new this(0, 1); }

  constructor (x: number = 0, y: number = 0)
  {
    super(x);
    this.y = y;
  }
  set _(value: bigint)
  {
    const onefill = BigInt(`0b${ '1'.repeat(128) }`);

    this.x = Number((value & (onefill << 128n)) >> 128n) / 100000;
    this.y = Number(value & onefill) / 100000;
  }
  get _(): bigint
  {
    let num = super._ << 128n;
    num = num | BigInt((this.y * 100000) | 0);
    return num;
  }
}