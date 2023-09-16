import { Vector2 } from "./vector2";

export class Vector3 extends Vector2
{
  z: number;

  static get back() { return new this(0, 0, -1); }
  static get forward() { return new this(0, 0, 1); }

  constructor (x: number = 0, y: number = 0, z: number = 0)
  {
    super(x, y);
    this.z = z;
  }

  set _(value: bigint)
  {
    const onefill = BigInt(`0b${ '1'.repeat(128) }`);

    this.x = Number((value & (onefill << 256n)) >> 256n) / 100000;
    this.y = Number((value & (onefill << 128n)) >> 128n) / 100000;
    this.z = Number(value & onefill) / 100000;
  }

  get _(): bigint
  {
    let num = super._ << 128n;
    num = num | BigInt((this.z * 100000) | 0);
    return num;
  }
}