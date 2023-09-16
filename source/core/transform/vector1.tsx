export class Vector
{
  x: number;

  static get left() { return new this(-1); }
  static get right() { return new this(1); }

  set _(value: bigint)
  {
    this.x = Number(value) / 100000;
  }

  constructor (x: number = 0)
  {
    this.x = x;
  }

  get _(): bigint
  {
    let num = 0n << 127n | BigInt((this.x * 100000)|0);
    return num;
  }
}
