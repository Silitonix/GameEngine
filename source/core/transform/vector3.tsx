import { Vector2 } from "./vector2";

export class Vector3 extends Vector2
{
  protected _z: number;

  static get back() { return new this(0, 0, -1); }
  static get forward() { return new this(0, 0, 1); }

  get z() { return this._z; }

  set(x: number, y?: number, z?: number)
  {
    super.set(x, y);
    this._z = z ?? this._z;
    return this;
  }

  add(value: Vector3) { super.add(value); this._z += value._z; return this; }
  sub(value: Vector3) { super.sub(value); this._z -= value._z; return this; }
  mul(value: Vector3) { super.mul(value); this._z *= value._z; return this; }
  div(value: Vector3) { super.div(value); this._z /= value._z; return this; }

  Vector2() { return new Vector2(this._x, this._y); }
  constructor (x: number = 0, y: number = 0, z: number = 0)
  {
    super(x, y);
    this._z = z;
  }
}

const vec = new Vector3();
vec.add(new Vector3(10, 20, 30));
console.log(vec);