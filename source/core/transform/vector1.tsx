export class Vector1
{
  protected _x: number;

  static get left() { return new this(-1); }
  static get right() { return new this(1); }

  get x() { return this._x; }
  
  set(x: number) { this._x = x; return this; }
  add(value: Vector1) { this._x += value._x; }
  sub(value: Vector1) { this._x -= value._x; }
  mul(value: Vector1) { this._x *= value._x; }
  div(value: Vector1) { this._x /= value._x; }

  constructor (x: number = 0)
  {
    this._x = x;
  }
}
