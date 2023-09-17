import { Vector1 } from "./vector1";

export class Vector2 extends Vector1
{
  protected _y: number;

  static get down() { return new this(0, -1); }
  static get up() { return new this(0, 1); }

  get y() { return this._y; }

  set(x: number, y?: number)
  {
    this.set(x);
    this._y = y ?? this._y;
    return this;
  }
  add(value: Vector2) { super.add(value); this._y += value._y; return this; }
  sub(value: Vector2) { super.sub(value); this._y -= value._y; return this; }
  mul(value: Vector2) { super.mul(value); this._y *= value._y; return this; }
  div(value: Vector2) { super.div(value); this._y /= value._y; return this; }

  Vector1() { return new Vector2(this._x); }
  constructor (x: number = 0, y: number = 0)
  {
    super(x);
    this._y = y;
  }
}