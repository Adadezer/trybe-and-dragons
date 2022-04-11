import { EnergyType } from '../Energy';

abstract class Archetype {
  readonly _name: string;
  readonly _special: number;
  readonly _cost: number;

  constructor(name: string) {
    this._special = 0;
    this._cost = 0;
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._special;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;