import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static qntInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Necromancer.qntInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.qntInstances;
  }
}

export default Necromancer;